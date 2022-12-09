import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const useAuth = () => {
  const user = { loggedIn: true };
  return user && user.loggedIn;
};

function ProtectedRoutes() {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
