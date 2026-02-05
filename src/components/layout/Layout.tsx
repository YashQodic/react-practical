import { Outlet } from 'react-router';
import Header from './Header';
import Sidebar from './Sidebar';
import { useState } from 'react';
import Footer from './Footer';

function Layout() {
  
  const [menuStatus, setMenuStatus] = useState<boolean>(false);

  return (
    <>
      <Header menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
      <Sidebar menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
      <Outlet />
      <Footer/>
    </>
  );
}
export default Layout;
