import { useContext } from "react";
import { AdminAuthContext } from "../../../context/AdminAuthContext";
import { Navigate } from "react-router-dom";

export const AdminAuthCheck = ({ children }) => {
  const { user } = useContext(AdminAuthContext);

  if (!user) {
    return <Navigate to={`/admin/login`} />;
  }
  return children;
};
