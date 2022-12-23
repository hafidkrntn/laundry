import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="relative w-auto border-gray-200 bg-[#ADE792] px-2 py-2.5 sm:px-4">
        <div className="mx-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <Link to="/dashboard">
              <div>Laundry</div>
            </Link>
          </div>
          <div className="flex w-2/12 items-center justify-end lg:w-1/12">
            <div className="py-3 px-4">
              <span className="block mr-6 text-lg text-white font-bold">
                Username
              </span>
              {/* <span className="block truncate text-sm font-medium text-gray-500 ">
              </span> */}
            </div>
            <ul className="py-1">
              <li>
                <div
                  onClick={() => handleLogout()}
                  className="0 block my-2 px- text-sm text-gray-700"
                >
                  <button className="">
                    Logout
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar