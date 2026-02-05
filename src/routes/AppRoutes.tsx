import { Navigate, Route, Routes } from 'react-router';
import Login from '../features/auth/pages/Login';
import Register from '../features/auth/pages/Register';
import ForgotPassword from '../features/auth/pages/ForgotPassword';
import Layout from '../components/layout/Layout';
import Product from '../features/product/pages/Product';
import ProtectRoutes from './ProtectRoutes';
import { routesPath } from '../utils/constants';
import Feature from '../features/feature/pages/Feature';
import About from '../features/about/pages/About';
import Contact from '../features/contact/pages/Contact';
import AuthRoutes from './AuthRoutes';
import ProductDetail from '../features/product/pages/ProductDetail';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthRoutes />}>
        <Route path={routesPath.login} element={<Login />} />
        <Route
          path={routesPath.home}
          element={<Navigate to={routesPath.login} />}
        />
        <Route path={routesPath.register} element={<Register />} />
        <Route path={routesPath.forgotPassword} element={<ForgotPassword />} />
      </Route>
      <Route element={<ProtectRoutes />}>
        <Route element={<Layout />}>
          <Route path={routesPath.product} element={<Product />} />
          <Route path={routesPath.productDetail} element={<ProductDetail/>}/>
          <Route path={routesPath.feature} element={<Feature />}></Route>
          <Route path={routesPath.about} element={<About />}></Route>
          <Route path={routesPath.contact} element={<Contact />}></Route>
          <Route
            path={routesPath.notfound}
            element={<div>404 Not Found</div>}
          ></Route>
        </Route>
      </Route>
    </Routes>
  );
}
