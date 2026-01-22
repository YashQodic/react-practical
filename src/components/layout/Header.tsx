import logo from '../../../public/vite.svg';
import { LogOutIcon, Menu, UserIcon } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { routesPath } from '../../utils/constants';
import DialogBox from '../common/DialogBox';
import Profile from '../../features/profile/page/Profile';

function Header(props: {
  menuStatus: boolean;
  setMenuStatus: (status: boolean) => void;
}) {

  const { userDetails, logout } = useAuthStore();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [open, setOpen] = useState(false);


  const handleLogout = () => {
    logout();
    navigate(routesPath.login)
  }

  function profileHtml() {
    return (
      <li className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
        <div className="flex items-center">
          <UserIcon className="h-5 w-5 inline mr-2" />{' '}
          <p className="font-inherit text-inherit">Profile</p>
        </div>
      </li>
    );
  } 
  return (
    <header className="p-3 lg:p-4 bg-gray-800 text-white border-b border-gray-700">
      <nav className="flex gap-4 items-center">
        <div className="hidden lg:flex items-center">
          <img
            src={logo}
            alt="App Logo"
            className="h-8 w-8 inline-block mr-2"
          />
          <span className="text-xl font-bold">My App</span>
        </div>
        <div className="flex lg:hidden flex-1">
          {!props.menuStatus ? (
            <Menu
              className="h-6 w-6"
              onClick={() => props.setMenuStatus(true)}
            />
          ) : null}
        </div>
        <div className="flex flex-1 justify-end items-end relative">
          <div
            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-gray-800 font-bold">
              {userDetails
                ? userDetails.username.split('')[0].toUpperCase() +
                  userDetails.username.split('')[1].toUpperCase()
                : null}
            </span>
          </div>
          <div className={isMenuOpen ? 'fixed group' : 'hidden'}>
            <ul className="flex flex-col absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10 group-hover:block">
              <DialogBox triggerChild={profileHtml()} portalChild={<Profile setOpen={setOpen}/>} open={open} setOpen={setOpen}/>
              <li
                className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                onClick={handleLogout}
              >
                <div className="flex items-center">
                  <LogOutIcon className="h-5 w-5 inline mr-2" />{' '}
                  <p className="font-inherit text-inherit">Log out</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
