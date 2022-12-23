import {
  faChevronDown,
  faChevronUp,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MenuLevel2({ children, menuLevel, link }) {
  const [dropdown, setdropdown] = useState(false);
  return (
    <>
      {menuLevel !== undefined ? (
        <li>
          <button
            type="button"
            className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-semibold text-gray-3 transition duration-75 hover:bg-[#EBEEFF] hover:text-blue-3  "
            onClick={() => {
              setdropdown(!dropdown);
            }}
          >
            <FontAwesomeIcon icon={faCircle} className="hover:text-blue-3" />
            <span className="ml-3 flex-1 text-left">{children}</span>
            {dropdown ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </button>
          <ul
            id="dropdown-example"
            className={`${dropdown ? `block` : `hidden`} space-y-2 py-2`}
          >
            {menuLevel.map((menu, id) => (
              <li key={id}>
                <NavLink
                  to={`${link}/${menu.link}`}
                  className={({ isActive }) =>
                    isActive
                      ? "group flex w-full items-center rounded-lg bg-[#EBEEFF] p-2 pl-[4.5rem] text-base font-semibold text-blue-3 transition duration-75  "
                      : "group flex w-full items-center rounded-lg p-2 pl-[4.5rem] text-base font-semibold text-gray-3 transition duration-75 hover:bg-[#EBEEFF] hover:text-blue-3  "
                  }
                >
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      ) : (
        <li>
          <NavLink
            to={link}
            className={({ isActive }) =>
              isActive
                ? "group flex w-full items-center rounded-lg bg-[#EBEEFF] p-2 pl-11 text-base font-semibold text-blue-3 transition duration-75  "
                : "group flex w-full items-center rounded-lg p-2 pl-11 text-base font-semibold text-gray-3 transition duration-75 hover:bg-[#EBEEFF] hover:text-blue-3  "
            }
          >
            <FontAwesomeIcon icon={faCircle} className="hover:text-blue-3" />
            <span className="ml-[.8rem] flex-1 text-left">{children}</span>
          </NavLink>
        </li>
      )}
    </>
  );
}
