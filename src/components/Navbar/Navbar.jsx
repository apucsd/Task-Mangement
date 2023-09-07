import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";
import {
  FaDashcube,
  FaHome,
  FaPeopleArrows,
  FaUserAltSlash,
} from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then(toast.success("Sign Out has Successful"));
  };
  return (
    <header className="w-full  px-3 shadow-lg body-font bg-gradient-to-l from-green-200 via-green-300 to-blue-500">
      <div className="container flex items-center justify-between px-5 py-2 mx-auto md:flex-row">
        <Link
          className="mr-5 mt-1 text-white font-medium text-2xl hover:text-gray-900"
          to="/"
        >
          DTask✍️
        </Link>
        <nav className="flex  items-center justify-center pl-24 text-base md:ml-auto md:mr-auto"></nav>
        <div className="items-center">
          {user ? (
            <div>
              <div className="drawer drawer-end z-20">
                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  {/* Page content here */}
                  <label htmlFor="my-drawer-4" className="">
                    <div className="avatar online -z-0">
                      <div className="w-10 rounded-full cursor-pointer mt-1">
                        <img src={user?.photoURL} />
                      </div>
                    </div>
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-4"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu  p-4 w-80 min-h-full bg-gradient-to-l from-green-200 via-green-100 to-blue-100">
                    {/* Sidebar content here */}

                    <li className="mt-0.5 w-full border-b">
                      <Link
                        className="py-2.7 bg-blue-500/13   text-sm  my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 "
                        to="/"
                      >
                        <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                          <FaDashcube className="relative top-0 text-sm leading-normal text-blue-500 "></FaDashcube>
                        </div>
                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                          Dashboard
                        </span>
                      </Link>
                    </li>
                    <li className="mt-0.5 w-full border-b">
                      <Link
                        className="py-2.7 bg-blue-500/13   text-sm  my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 "
                        to="/"
                      >
                        <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                          <FaHome className="relative top-0 text-sm leading-normal text-blue-500 "></FaHome>
                        </div>
                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                          Home
                        </span>
                      </Link>
                    </li>
                    <li className="mt-0.5 w-full border-b">
                      <Link
                        className="py-2.7   text-sm  my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 "
                        to="/profile"
                      >
                        <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                          <FaPeopleArrows className="relative top-0 text-sm leading-normal text-blue-500 "></FaPeopleArrows>
                        </div>
                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                          Profile
                        </span>
                      </Link>
                    </li>
                    <li
                      onClick={handleSignOut}
                      className="mt-0.5 w-full border-b"
                    >
                      <a className="py-2.7 bg-blue-500/13   text-sm  my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 ">
                        <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                          <FaUserAltSlash className="relative top-0 text-sm leading-normal text-blue-500 "></FaUserAltSlash>
                        </div>
                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                          Log Out
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex ">
              <Link
                to="/login"
                className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-blue-600 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
              >
                Login
              </Link>
            </div>
          )}
        </div>
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>

      {/* sidebar */}
    </header>
  );
};

export default Navbar;
