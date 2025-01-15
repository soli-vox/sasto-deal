import { Link, useNavigate, useParams } from "react-router-dom";
import MainLayout from "./../../common/MainLayout";
import { useForm } from "react-hook-form";
import Sidebar from "../../common/Sidebar";
import { useState } from "react";
import { adminToken, API_URL } from "../../../services/ApiService";
import { toast } from "react-toastify";

const Edit = () => {
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const [brand, setBrand] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      const res = await fetch(`${API_URL}/admin/brand/${params.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${adminToken()}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.status == 200) {
            setBrand(result.data);
            reset({
              name: result.data.name,
              status: result.data.status,
            });
          } else {
            console.log("Something Went Wrong. Please try again.");
          }
        });
    },
  });

  const handleUpdateBrandForm = async (data) => {
    setDisable(true);
    const res = await fetch(`${API_URL}/admin/brand/${params.id}`, {
      method: "PUT",
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
          navigate("/admin/brand/show");
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
            <h4 className="h5 pb-0 mb-0">Categories / Update </h4>
            <Link to="/admin/brand/show" className="btn btn-secondary">
              Show Brands
            </Link>
          </div>
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <div className="card shadow">
              <form onSubmit={handleSubmit(handleUpdateBrandForm)}>
                <div className="card-body p-4">
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      <strong>Brand Name</strong>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Brand Name"
                      className={`form-control ${errors.name && "is-invalid"}`}
                      {...register("name", {
                        required: "Brand Name is required. ",
                      })}
                    />
                    {errors.name && (
                      <p className="invalid-feedback">{errors.name?.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      <strong>Brand Status</strong>
                    </label>
                    <select
                      {...register("status", {
                        required: "Select Brand Status ",
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
                    Update Brand
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

export default Edit;
