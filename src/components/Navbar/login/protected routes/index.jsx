import React from "react";
import { Outlet, Navigate } from "react-router";
const ProtectedRoutes = () => {
  const auth = localStorage.getItem("loggin");
  return auth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
