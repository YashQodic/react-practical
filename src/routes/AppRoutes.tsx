import { Route, Routes } from 'react-router';
import Login from '../features/auth/pages/Login';
import Register from '../features/auth/pages/Register';
import ForgotPassword from '../features/auth/pages/ForgotPassword';
import Layout from '../components/layout/Layout';
import Product from '../features/Product/pages/Product';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route element={<Layout />}>
        <Route path="/product" element={<Product />} />
      </Route>
      <Route path="/*" element={<div>404 Not Found</div>}></Route>
    </Routes>
  );
}
