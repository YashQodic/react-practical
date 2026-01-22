import { Outlet, Navigate } from "react-router";
import { localStorageKeys, routesPath } from "../utils/constants";

function AuthRoutes() {
  const userLogin = localStorage.getItem(localStorageKeys.userLogin) || false;
  return !userLogin ? <Outlet /> : <Navigate to={routesPath.product} replace />;
}

export default AuthRoutes;
