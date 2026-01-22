import {
  BoxIcon,
  ContactIcon,
  FeatherIcon,
  InfoIcon,
  LogOutIcon,
  X,
} from 'lucide-react';
import logo from '../../../public/vite.svg';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { localStorageKeys, routesPath } from '../../utils/constants';
import Footer from './Footer';
import { sleep } from '../../utils/helper';

function Sidebar(props: {
  menuStatus: boolean;
  setMenuStatus: (status: boolean) => void;
}) {
  const location = useLocation();
  const navigation = useNavigate();

  const logOut = async () => {
    localStorage.removeItem(localStorageKeys.userLogin);
    await sleep(100);
    navigation(routesPath.login);
  };

  return props.menuStatus ? (
    <aside
      className={`
        bg-blue-50 text-white w-64
        lg:static lg:translate-x-0
        fixed top-0 left-0 h-full z-50
        transition-transform
        flex flex-col
        ${props.menuStatus ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <div className="flex lg:hidden items-center justify-between border-b border-gray-300">
        <div className="flex items-center p-4">
          <img
            src={logo}
            alt="App Logo"
            className="h-8 w-8 inline-block mr-2"
          />
          <span className="text-xl font-bold text-gray-800">My App</span>
        </div>
        <div className="flex lg:hidden justify-end p-2">
          <X
            className="h-6 w-6 cursor-pointer text-gray-800 hover:bg-gray-800 hover:text-white rounded-sm"
            onClick={() => props.setMenuStatus(false)}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <ul className="space-y-4 p-4">
          <li
            className={
              location.pathname === '/product'
                ? 'bg-gray-700 p-1 rounded-sm'
                : 'hover:bg-gray-700 p-1 rounded-sm'
            }
          >
            <NavLink
              to={routesPath.product}
              className={({ isActive }) =>
                `block text-md font-bold transition-colors
     ${isActive ? 'text-gray-100' : 'text-gray-800 hover:text-gray-100'}`
              }
            >
              <div className="flex items-center">
                <BoxIcon className="h-5 w-5 inline mr-2" />
                <p className="font-inherit text-inherit">Product</p>
              </div>
            </NavLink>
          </li>
          <li
            className={
              location.pathname === '/feature'
                ? 'bg-gray-700 p-1 rounded-sm'
                : 'hover:bg-gray-700 p-1 rounded-sm'
            }
          >
            <NavLink
              to={routesPath.feature}
              className={({ isActive }) =>
                `block text-md font-bold transition-colors
     ${isActive ? 'text-gray-100' : 'text-gray-800 hover:text-gray-100'}`
              }
            >
              <div className="flex items-center">
                <FeatherIcon className="h-5 w-5 inline mr-2" />
                <p className="font-inherit text-inherit">Feature</p>
              </div>
            </NavLink>
          </li>
          <li
            className={
              location.pathname === '/about'
                ? 'bg-gray-700 p-1 rounded-sm'
                : 'hover:bg-gray-700 p-1 rounded-sm'
            }
          >
            <NavLink
              to={routesPath.about}
              className={({ isActive }) =>
                `block text-md font-bold transition-colors
     ${isActive ? 'text-gray-100' : 'text-gray-800 hover:text-gray-100'}`
              }
            >
              <div className="flex items-center">
                <InfoIcon className="h-5 w-5 inline mr-2" />{' '}
                <p className="font-inherit text-inherit">About</p>
              </div>
            </NavLink>
          </li>
          <li
            className={
              location.pathname === '/contact'
                ? 'bg-gray-700 p-1 rounded-sm'
                : 'hover:bg-gray-700 p-1 rounded-sm'
            }
          >
            <NavLink
              to={routesPath.contact}
              className={({ isActive }) =>
                `block text-md font-bold transition-colors
     ${isActive ? 'text-gray-100' : 'text-gray-800 hover:text-gray-100'}`
              }
            >
              <div className="flex items-center">
                <ContactIcon className="h-5 w-5 mr-2" />
                <p className="font-inherit text-inherit">Contact</p>
              </div>
            </NavLink>
          </li>
          <hr className="border-gray-700"></hr>
          <li className="hover:bg-gray-700 p-1 rounded-sm">
            <div
              className="block text-md text-gray-800 hover:text-gray-100 font-bold active:text-gray-100 active:font-bold cursor-pointer"
              onClick={logOut}
            >
              <div className="flex items-center">
                <LogOutIcon className="h-5 w-5 inline mr-2" />{' '}
                <p className="font-inherit text-inherit">Log out</p>
              </div>
            </div>
          </li>
        </ul>
        <Footer />
      </div>
    </aside>
  ) : null;
}

export default Sidebar;
