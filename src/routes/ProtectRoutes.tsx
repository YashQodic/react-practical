import { Outlet, Navigate } from "react-router";
import { routesPath } from "../utils/constants";
import { useAuthStore } from "../store/authStore";

function ProtectRoutes() {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? <Outlet /> : <Navigate to={routesPath.home} replace />;
}

export default ProtectRoutes;
