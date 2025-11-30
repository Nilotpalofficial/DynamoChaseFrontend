import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ children, admin, redirect = "/admin/signin" }) => {
  if (!admin) return <Navigate to={redirect} />;

  return children ? children : <Outlet />;
};

export default ProtectRoute;