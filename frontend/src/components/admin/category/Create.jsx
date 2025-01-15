import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../../common/MainLayout";
import Sidebar from "../../common/Sidebar";
import { useForm } from "react-hook-form";
import { adminToken, API_URL } from "../../../services/ApiService";
import { useState } from "react";
import { toast } from "react-toastify";

const Create = () => {
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleCreateCategoryForm = async (data) => {
    setDisable(true);
    const res = await fetch(`${API_URL}/admin/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${adminToken()}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        setDisable(false);
        if (result.status == 200) {
          toast.success(result.message);
          navigate("/admin/category/show");
        } else {
          console.log("Something Went Wrong. Please try again.");
        }
      });
  };

  return (
    <MainLayout>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between mt-5 pb-3">
            <h4 className="h5 pb-0 mb-0">Categories / Create </h4>
            <Link to="/admin/category/show" className="btn btn-secondary">
              Show Categories
            </Link>
          </div>
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <div className="card shadow">
              <form onSubmit={handleSubmit(handleCreateCategoryForm)}>
                <div className="card-body p-4">
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      <strong>Category Name</strong>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Category Name"
                      className={`form-control ${errors.name && "is-invalid"}`}
                      {...register("name", {
                        required: "Category Name is required. ",
                      })}
                    />
                    {errors.name && (
                      <p className="invalid-feedback">{errors.name?.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      <strong>Category Status</strong>
                    </label>
                    <select
                      {...register("status", {
                        required: "Select Category Status ",
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
                  <button disabled={disable} className="btn btn-secondary">
                    Save Category
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Create;
