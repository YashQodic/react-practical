import { Outlet, Navigate } from "react-router";

function ProtectRoutes() {
  const userLogin = localStorage.getItem('userLogin');
  return userLogin ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectRoutes;
