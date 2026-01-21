import { Outlet, Navigate } from "react-router";
import { localStorageKeys, routesPath } from "../utils/constants";

function ProtectRoutes() {
  const userLogin = localStorage.getItem(localStorageKeys.userLogin);
  return userLogin ? <Outlet /> : <Navigate to={routesPath.home} replace />;
}

export default ProtectRoutes;
