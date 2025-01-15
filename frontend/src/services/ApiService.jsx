export const API_URL = "http://localhost:8000/api/v1";

export const adminToken = () => {
  const adminInfo = JSON.parse(localStorage.getItem("adminInfo"));
  return adminInfo.token;
};
