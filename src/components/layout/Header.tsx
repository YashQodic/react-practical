import { NavLink, useNavigate } from 'react-router';
import logo from '../../../public/vite.svg';
import { LogOutIcon, Menu } from 'lucide-react';

function Header(props: {
  menuStatus: boolean;
  setMenuStatus: (status: boolean) => void;
}) {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem('userLogin');
    navigate('/');
  };
  return (
    <header className="p-4 bg-gray-800 text-white">
      <nav className="flex gap-4 items-center">
        <div>
          <img
            src={logo}
            alt="App Logo"
            className="h-8 w-8 inline-block mr-2"
          />
        </div>
        <div className="hidden lg:flex gap-3">
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `block text-md hover:text-stone-400 ${
                isActive ? 'font-bold text-white' : 'text-gray-100'
              }`
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/feature"
            className={({ isActive }) =>
              `block text-md hover:text-stone-400 ${
                isActive ? 'font-bold text-white' : 'text-gray-100'
              }`
            }
          >
            Feature
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block text-md hover:text-stone-400 ${
                isActive ? 'font-bold text-white' : 'text-gray-100'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block text-md hover:text-stone-400 ${
                isActive ? 'font-bold text-white' : 'text-gray-100'
              }`
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="flex lg:hidden flex-1 justify-end items-end">
          {!props.menuStatus ? (
            <Menu
              className="h-6 w-6"
              onClick={() => props.setMenuStatus(true)}
            />
          ) : null}
        </div>
        <div className="hidden lg:flex flex-1 justify-end items-end">
          <NavLink to="/" className="flex items-center hover:text-stone-400">
            <LogOutIcon
              className="h-5 w-5 inline mr-1 hover:text-inherit"
              onClick={logOut}
            />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
export default Header;
