import { Navigate, Route, Routes } from 'react-router';
import Login from '../features/auth/pages/Login';
import Register from '../features/auth/pages/Register';
import ForgotPassword from '../features/auth/pages/ForgotPassword';
import Layout from '../components/layout/Layout';
import Product from '../features/Product/pages/Product';
import ProtectRoutes from './ProtectRoutes';

export default function AppRoutes() {
  const userLogin = localStorage.getItem('userLogin') || false;
  return (
    <Routes>
      {!userLogin && (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </>
      )}
      <Route element={<ProtectRoutes />}>
        <Route element={<Layout />}>
          <Route path="/product" element={<Product />} />
          <Route path="/" element={<Navigate to="/product" />} />
          <Route path="/login" element={<Navigate to="/product" />} />
          <Route path="/register" element={<Navigate to="/product" />} />
          <Route path="/forgot-password" element={<Navigate to="/product" />} />
          <Route path="/*" element={<div>404 Not Found</div>}></Route>
        </Route>
      </Route>
    </Routes>
  );
}
