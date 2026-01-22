import { Outlet } from 'react-router';
import Header from './Header';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';

function Layout() {
  const [menuStatus, setMenuStatus] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuStatus(true);
      } else {
        setMenuStatus(false);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="block">
        <Header menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
      </div>

      <div className="flex flex-1">
        <div className="block">
          <Sidebar menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
        </div>

        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
