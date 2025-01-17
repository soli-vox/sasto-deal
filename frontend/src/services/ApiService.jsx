import { toast } from "react-toastify";
export const API_URL = "http://localhost:8000/api/v1";

export const adminToken = () => {
  const adminInfo = JSON.parse(localStorage.getItem("adminInfo"));
  return adminInfo?.token || "";
};

export const apiRequest = async (endpoint, method="GET",body=null, headers={}, setLoading=null) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${adminToken()}`,
  };

  const options = {
    method,
    headers: { ...defaultHeaders, ...headers },
  };
  if (body) {
    if (body instanceof FormData) {
      delete options.headers["Content-Type"];
      options.body = body;
    }else {
      options.body = JSON.stringify(body);
    }
  }
  try{
    if (setLoading) setLoading(true);
    const response = await fetch(`${API_URL}/${endpoint}`, options);
    const result = await response.json();
    if (!response.ok) {
      throw result;
    }
    return result;
  }catch (error) {
    console.error("API Error:", error);
    if (error.message) {
      toast.error(error.message);
    } else {
      toast.error("Something went wrong. Please try again.");
    }

    throw error;
  }finally {
    if (setLoading) setLoading(false);
  }
}