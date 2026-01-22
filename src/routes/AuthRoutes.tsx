import { Outlet, Navigate } from "react-router";
import { routesPath } from "../utils/constants";
import { useAuthStore } from "../store/authStore";

function AuthRoutes() {
  const { isAuthenticated } = useAuthStore();
  return !isAuthenticated ? <Outlet /> : <Navigate to={routesPath.product} replace />;
}

export default AuthRoutes;
