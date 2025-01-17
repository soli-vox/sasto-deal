/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import MainLayout from "../../common/MainLayout";
import Sidebar from "../../common/Sidebar";
import { apiRequest} from "../../../services/ApiService";
import { useEffect, useState } from "react";
import Loading from "../../common/Loading";
import DataNotFound from "../../common/DataNotFound";
import { toast } from "react-toastify";

const Show = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategories = async () => {
    try{

      const response = await  apiRequest("categories","GET",null,{},setLoading);
      setCategories(response.data);
    }catch (error){
      toast.error("Error loading categories. Please try again later.");
    }
  };
  useEffect(() => {
    getCategories()
  }, []);

  const deleteCategory = async (id) => {
    if (confirm("Are Your Sure?")) {
      try{
        await apiRequest(`categories/${id}`, "DELETE", null, {}, setLoading);
        setCategories((prev) => prev.filter((category) => category.id !== id));
        toast.success("Category deleted successfully.");
      }catch (error) {
        toast.error("Failed to delete category.");
      }
    }
  };

  return (
    <MainLayout>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between mt-5 pb-3">
            <h4 className="h5 pb-0 mb-0">Categories / Show </h4>
            <Link to="/admin/category/create" className="btn btn-secondary">
              Create Category
            </Link>
          </div>
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <div className="card shadow">
              <div className="card-body p-4">
                {loading === true && <Loading />}
                {loading === false && categories.length === 0 && (
                  <DataNotFound text="No Category Added Yet!!" />
                )}
                {categories && categories.length > 0 && (
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <td width={50}>ID</td>
                        <td>Name</td>
                        <td width={100}>Status</td>
                        <td width={100}>Action</td>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((category) => {
                        return (
                          <tr>
                            <td key={category.id}>{category.id}</td>
                            <td>{category.name}</td>
                            <td>
                              {category.status === 1 ? (
                                <span className="badge text-bg-success">
                                  Active
                                </span>
                              ) : (
                                <span className="badge text-bg-danger">
                                  Block
                                </span>
                              )}
                            </td>
                            <td>
                              <Link
                                to={`/admin/category/edit/${category.id}`}
                                className="text-primary ms-3"
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="18"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"></path>
                                </svg>
                              </Link>
                              <Link
                                to=""
                                className="text-danger ms-3"
                                onClick={() => deleteCategory(category.id)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  className="bi bi-trash3"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                </svg>
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Show;
