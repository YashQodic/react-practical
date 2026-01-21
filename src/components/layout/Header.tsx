import { NavLink } from 'react-router';
import logo from '../../../public/vite.svg';
import { Menu, X } from "lucide-react"
import { useState } from 'react';

function Header(){

    const [menuStatus, setMenuStatus] = useState<boolean>(true);

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
            {menuStatus ? (
              <Menu className="h-6 w-6" onClick={() => setMenuStatus(false)} />
            ) : null}
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end">
            <NavLink
              to="/"
              className="block text-md text-gray-100 active:font-bold hover:text-stone-400"
            >
              Log out
            </NavLink>
          </div>
        </nav>
      </header>
    );
}
export default Header;