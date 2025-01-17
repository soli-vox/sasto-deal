import { useForm } from "react-hook-form";
import MainLayout from "../../common/MainLayout";
import { API_URL } from "../../../services/ApiService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AdminAuthContext } from "../../../context/AdminAuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AdminAuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginForm = async (data) => {
    const res = await fetch(`${API_URL}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.status == 200) {
          const adminInfo = {
            token: result.token,
            id: result.id,
            name: result.name,
          };

          localStorage.setItem("adminInfo", JSON.stringify(adminInfo));
          login(adminInfo);
          navigate("/admin/dashboard");
        } else {
          toast.error(result.message);
        }
      });
  };

  return (
    <MainLayout>
      <div className="container d-flex justify-content-center py-5">
        <form onSubmit={handleSubmit(handleLoginForm)}>
          <div className="card shadow border-0 login">
            <div className="card-body p-4">
              <h3>Administrator Login Panel</h3>
              <div className="mb-3">
                <label name="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="text"
                  placeholder="Email Address"
                  className={`form-control ${errors.email && "is-invalid"}`}
                  {...register("email", {
                    required: "Email Address is required. ",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="invalid-feedback">{errors.email?.message}</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className={`form-control ${errors.password && "is-invalid"}`}
                  {...register("password", {
                    required: "Password is required. ",
                  })}
                />
                {errors.email && (
                  <p className="invalid-feedback">{errors.password?.message}</p>
                )}
              </div>
              <button className="btn btn-secondary">Account Login</button>
            </div>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default Login;
