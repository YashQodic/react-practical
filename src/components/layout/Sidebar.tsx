import {
  BoxIcon,
  ContactIcon,
  FeatherIcon,
  InfoIcon,
  LogOutIcon,
  X,
} from 'lucide-react';
import { NavLink, useLocation } from 'react-router';
import { localStorageKeys, routesPath } from '../../utils/constants';

function Sidebar(props: {
  menuStatus: boolean;
  setMenuStatus: (status: boolean) => void;
}) {

  const location = useLocation();

  return props.menuStatus ? (
    <aside className="fixed top-0 right-0 w-64 bg-gray-800 text-white h-screen p-4 pl-2 border-l border-gray-700 z-50 lg:hidden">
      <div className="flex justify-end m-2">
        <X
          className="h-6 w-6 mb-4 cursor-pointer"
          onClick={() => props.setMenuStatus(false)}
        />
      </div>
      <ul className="space-y-4">
        <li className={location.pathname === "/product" ? "bg-gray-700 p-1 rounded-sm" : "hover:bg-gray-700 p-1 rounded-sm"}>
          <NavLink
            to={routesPath.product}
            className="block text-md text-gray-100 active:font-bold "
          >
            <div className="flex items-center">
              <BoxIcon className="h-5 w-5 inline mr-2" />
              <p className="text-md text-gray-100 active:font-bold ">
                Product
              </p>
            </div>
          </NavLink>
        </li>
        <li className={location.pathname === "/feature" ? "bg-gray-700 p-1 rounded-sm" : "hover:bg-gray-700 p-1 rounded-sm"}>
          <NavLink
            to={routesPath.feature}
            className="block text-md text-gray-100 active:font-bold "
          >
            <div className="flex items-center">
              <FeatherIcon className="h-5 w-5 inline mr-2" />
              <p className="text-md text-gray-100 active:font-bold ">
                Feature
              </p>
            </div>
          </NavLink>
        </li>
        <li className={location.pathname === "/about" ? "bg-gray-700 p-1 rounded-sm" : "hover:bg-gray-700 p-1 rounded-sm"}>
          <NavLink
            to={routesPath.about}
            className="block text-md text-gray-100 active:font-bold "
          >
            <div className="flex items-center">
              <InfoIcon className="h-5 w-5 inline mr-2" />{' '}
              <p className="text-md text-gray-100 active:font-bold ">
                About
              </p>
            </div>
          </NavLink>
        </li>
        <li className={location.pathname === "/contact" ? "bg-gray-700 p-1 rounded-sm" : "hover:bg-gray-700 p-1 rounded-sm"}>
          <NavLink
            to={routesPath.contact}
            className="block text-md text-gray-100 active:font-bold "
          >
            <div className="flex items-center">
              <ContactIcon className="h-5 w-5 inline mr-2" />{' '}
              <p className="text-md text-gray-100 active:font-bold ">
                Contact
              </p>
            </div>
          </NavLink>
        </li>
        <hr className="border-gray-700"></hr>
        <li className="hover:bg-gray-700 p-1 rounded-sm">
          <NavLink
            to={routesPath.login}
            className="block text-md text-gray-100 active:font-bold "
            onClick={()=>localStorage.removeItem(localStorageKeys.userLogin)}
          >
            <div className="flex items-center">
              <LogOutIcon className="h-5 w-5 inline mr-2" />{' '}
              <p className="text-md text-gray-100 active:font-bold ">
                Log out
              </p>
            </div>
          </NavLink>
        </li>
      </ul>
    </aside>
  ) : null;
}

export default Sidebar;
