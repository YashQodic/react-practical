import { NavLink } from 'react-router';
import logo from '../../../public/vite.svg';
import { LogOutIcon, Menu } from 'lucide-react';
import { localStorageKeys, routesPath } from '../../utils/constants';

function Header(props: {
  menuStatus: boolean;
  setMenuStatus: (status: boolean) => void;
}) {

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
            to={routesPath.product}
            className={({ isActive }) =>
              `block text-md hover:text-stone-400 ${
                isActive ? 'font-bold text-white' : 'text-gray-100'
              }`
            }
          >
            Product
          </NavLink>
          <NavLink
            to={routesPath.feature}
            className={({ isActive }) =>
              `block text-md hover:text-stone-400 ${
                isActive ? 'font-bold text-white' : 'text-gray-100'
              }`
            }
          >
            Feature
          </NavLink>
          <NavLink
            to={routesPath.about}
            className={({ isActive }) =>
              `block text-md hover:text-stone-400 ${
                isActive ? 'font-bold text-white' : 'text-gray-100'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to={routesPath.contact}
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
          <NavLink to={routesPath.login} className="flex items-center hover:text-stone-400">
            <LogOutIcon
              className="h-5 w-5 inline mr-1 hover:text-inherit"
              onClick={()=>localStorage.removeItem(localStorageKeys.userLogin)}
            />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
export default Header;
