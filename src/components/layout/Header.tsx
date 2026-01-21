import { NavLink } from 'react-router';
import logo from '../../../public/vite.svg';
import { Menu } from "lucide-react"

function Header(props: {menuStatus: boolean, setMenuStatus: (status: boolean) => void}) {


    return (
      <header className="fixed top-0 w-full z-10 p-4 bg-gray-800 text-white">
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
              className="block text-md text-gray-100 active:font-bold hover:text-stone-400"
            >
              Product
            </NavLink>
            <NavLink
              to="/feature"
              className="block text-md text-gray-100 active:font-bold hover:text-stone-400"
            >
              Feature
            </NavLink>
            <NavLink
              to="/about"
              className="block text-md text-gray-100 active:font-bold hover:text-stone-400"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="block text-md text-gray-100 active:font-bold hover:text-stone-400"
            >
              Contact
            </NavLink>
          </div>
          <div className="flex lg:hidden flex-1 justify-end items-end">
            {!props.menuStatus ? (
              <Menu className="h-6 w-6" onClick={() => props.setMenuStatus(true)} />
            ) : null}
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end">
            <NavLink
              to="/"
              className="block text-md text-gray-100 hover:text-stone-400"
            >
              Log out
            </NavLink>
          </div>
        </nav>
      </header>
    );
}
export default Header;