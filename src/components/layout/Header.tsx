import { NavLink } from 'react-router';
import logo from '../../../public/vite.svg';
import { LogOutIcon, Menu } from 'lucide-react';
import { localStorageKeys, routesPath } from '../../utils/constants';

function Header(props: {
  menuStatus: boolean;
  setMenuStatus: (status: boolean) => void;
}) {

  return (
    <header className="p-4 bg-gray-800 text-white border-b border-gray-700">
      <nav className="flex gap-4 items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt="App Logo"
            className="h-8 w-8 inline-block mr-2"
          />
          <span className="text-xl font-bold">My App</span>
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
        </div>
      </nav>
    </header>
  );
}
export default Header;
