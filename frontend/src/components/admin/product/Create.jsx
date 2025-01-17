import MainLayout from "../../common/MainLayout.jsx";
import {Link, useNavigate} from "react-router-dom";
import Sidebar from "../../common/Sidebar.jsx";
import React, {useEffect, useState, useRef, useMemo} from "react";
import {useForm} from "react-hook-form";
import {adminToken, API_URL} from "../../../services/ApiService.jsx";
import {toast} from "react-toastify";
import JoditEditor from 'jodit-react';

const Create = ({ placeholder })=>{

    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [disable, setDisable] = useState(false);
    const [categories,setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const navigate = useNavigate();

    const config = useMemo(()=>({
        placeholder: placeholder || ''
    }),[placeholder]);
    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors },
    } = useForm();

    const getCategories = async () => {
        const res = await fetch(`${API_URL}/admin/category`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${adminToken()}`,
            },
        })
          .then((res) => res.json())
          .then((result) => {
              if (result.status === 200) {
                  setCategories(result.data);
              } else {
                  console.log("Something Went Wrong. Please try again.");
              }
          });
    };


    const getBrands = async () => {
        const res = await fetch(`${API_URL}/admin/brand`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${adminToken()}`,
            },
        })
          .then((res) => res.json())
          .then((result) => {
              if (result.status === 200) {
                  setBrands(result.data);
              } else {
                  console.log("Something Went Wrong. Please try again.");
              }
          });
    };


    const handleCreateProductForm = async (data) => {
        setDisable(true);
        const formData = {...data,"description":content}
        console.log(formData);
        const res = await fetch(`${API_URL}/admin/product`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${adminToken()}`,
            },
            body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result.data);
              setDisable(false);
              if (result.status === 200) {
                  toast.success(result.message);
                  navigate("/admin/product/show");
              } else {
                  Object.keys(result.errors).forEach((field)=>{
                      setError(field,{message:result.errors[field][0]});
                  })
                //  console.log("Something Went Wrong. Please try again.");
              }
          });
    };

    useEffect(() => {
        getCategories();
        getBrands();
    }, []);


    return (
        <MainLayout>
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-between mt-5 pb-3">
                        <h4 className="h5 pb-0 mb-0">Products / Create </h4>
                        <Link to="/admin/product/show" className="btn btn-secondary">
                            Show Products
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Sidebar/>
                    </div>
                    <div className="col-md-9 mb-5">
                        <div className="card shadow">
                            <form onSubmit={handleSubmit(handleCreateProductForm)}>
                                <div className="card-body p-4">
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">
                                            <strong>Product Name</strong>
                                        </label>
                                        <input
                                          type="text"
                                          placeholder="Enter Product Name"
                                          className={`form-control ${errors.name && "is-invalid"}`}
                                          {...register("name", {
                                              required: "Product Name is required. ",
                                          })}
                                        />
                                        {errors.name && (
                                          <p className="invalid-feedback">{errors.name?.message}</p>
                                        )}
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="" className="form-label">
                                                    <strong>Categories</strong>
                                                </label>
                                                <select
                                                  {...register("category", {
                                                      required: "Select Category",
                                                  })}
                                                  className={`form-control ${
                                                    errors.category && "is-invalid"
                                                  }`}

                                                >
                                                    <option value="">Select Category</option>
                                                    {
                                                      categories && categories.map((category) => {
                                                          return (
                                                            <option key={`category-${category.id}`} value={category.id}>
                                                                {category.name}
                                                            </option>
                                                          );
                                                      })
                                                    }
                                                </select>
                                                {errors.category && (
                                                  <p className="invalid-feedback">
                                                      {errors.category?.message}
                                                  </p>
                                                )}
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="" className="form-label">
                                                    <strong>Brands</strong>
                                                </label>
                                                <select
                                                  {...register("brand")}
                                                  className="form-control">
                                                    <option value="">Select Brand</option>
                                                    {
                                                      brands && brands.map((brand) => {
                                                          return (
                                                            <option key={`brand-${brand.id}`} value={brand.id}>
                                                                {brand.name}
                                                            </option>
                                                          );
                                                      })
                                                    }
                                                </select>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">
                                            <strong>Short Description</strong>
                                        </label>
                                        <textarea  {...register("short_description")} className="form-control" placeholder="Short Description"
                                                  rows={3}></textarea>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label"><strong>Description</strong></label>
                                        <JoditEditor
                                          ref={editor}
                                          value={content}
                                          config={config}
                                          tabIndex={1} // tabIndex of textarea
                                          onBlur={newContent => setContent(newContent)}

                                        />
                                    </div>
                                    <h3 className="py-3 border-bottom mb-3">Pricing</h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="" className="form-label"><strong>Price</strong></label>
                                                <input type="number"
                                                       className={`form-control ${errors.price && "is-invalid"}`}
                                                       {...register("price", {
                                                           required: "Product Price is required.",
                                                           min: { value: 1, message: "Price must be at least 1." },
                                                       })}
                                                       placeholder="Enter Price of Product"/>
                                                {errors.price && (
                                                  <p className="invalid-feedback">{errors.price?.message}</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="" className="form-label">
                                                    <strong>Discounted Price</strong>
                                                </label>
                                                <input type="number" {...register("compare_price")} className="form-control"
                                                       placeholder="Enter Discounted Price of Product"/>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="py-3 border-bottom mb-3">Inventory</h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="" className="form-label">
                                                    <strong>SKU</strong>
                                                </label>
                                                <input
                                                  className={`form-control ${errors.sku && "is-invalid"}`}
                                                  {...register("sku", {
                                                      required: "SKU is required. ",
                                                  })}

                                                  placeholder="Enter SKU of Product"/>
                                                {errors.sku && (
                                                  <p className="invalid-feedback">{errors.sku?.message}</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="" className="form-label">
                                                    <strong>Barcode</strong>
                                                </label>
                                                <input type="number" {...register("bar_code")} className="form-control"
                                                       placeholder="Enter Barcode of Product"/>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="" className="form-label">
                                                    <strong>Quantity</strong>
                                                </label>
                                                <input type="number" {...register("quantity")} className="form-control"
                                                       placeholder="Quantity"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="" className="form-label">
                                                    <strong>Product Status</strong>
                                                </label>
                                                <select
                                                  {...register("status", {
                                                      required: "Select Product Status ",
                                                  })}
                                                  className={`form-control ${
                                                    errors.status && "is-invalid"
                                                  }`}
                                                >
                                                    <option value="">Choose Status</option>
                                                    <option value="1">Active</option>
                                                    <option value="0">Block</option>
                                                </select>
                                                {errors.status && (
                                                  <p className="invalid-feedback">
                                                      {errors.status?.message}
                                                  </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">
                                            <strong>Product Featured</strong>
                                        </label>
                                        <select
                                          {...register("is_featured", {
                                              required: "Select Yes or No for Product Featured ",
                                          })}
                                          className={`form-control ${
                                            errors.is_featured && "is-invalid"
                                          }`}
                                        >

                                            <option value="1">Active</option>
                                            <option value="0">Block</option>
                                        </select>
                                        {errors.is_featured && (
                                          <p className="invalid-feedback">
                                              {errors.is_featured?.message}
                                          </p>
                                        )}
                                    </div>
                                    <h3 className="py-3 border-bottom mb-3">Product Gallery</h3>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Image</label>
                                        <input type="file" className="form-control"/>
                                    </div>


                                    <button disabled={disable} className="btn btn-secondary mt-3 mb-3">
                                        Save Product
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Create;