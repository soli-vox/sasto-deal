import {toast} from "react-toastify";
import apiEndpoints from "../config/apiEndpoints.js";

export const API_URL = "http://localhost:8000/api/v1";

export const adminToken = () => {
  const adminInfo = JSON.parse(localStorage.getItem("adminInfo"));
  return adminInfo?.token || "";
};

export const apiRequest = async (endpointKey, method = "GET", data = null, headers = {}, setLoading = null)  => {
  if (setLoading) setLoading(true);
  try{
    const token = JSON.parse(localStorage.getItem("adminInfo"))?.token || "";
    const url = apiEndpoints[endpointKey];
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        ...headers,
      },
      body: data ? JSON.stringify(data) : null,
    });
    return await response.json();
  }catch (error){
    console.error("API Request Error:", error);
    throw error;
  }finally {
    if (setLoading) setLoading(false);
  }
}