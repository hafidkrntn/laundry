import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <nav className="relative border-gray-200 bg-green-navbar px-2 py-4 sm:px-4">
      <div className="w-[95%] mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Link to="/dashboard">
            <div className="text-white text-4xl">Laundry</div>
          </Link>
        </div>
        <button className="flex items-center">
          <FontAwesomeIcon icon={faUserCircle} className="text-4xl text-white" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;