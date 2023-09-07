import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuLevel2 from "../menuLevel2";

export default function MenuLevel1({ children, menuLevel, link }) {
  const [dropdown, setdropdown] = useState(false);
  return (
    <>
      {menuLevel !== undefined ? (
        <li>
          <button
            type="button"
            className="group flex w-full items-center rounded-lg p-2 text-base font-semibold text-gray-3 transition duration-75 hover:bg-[#EBEEFF] hover:text-blue-3  "
            onClick={() => {
              setdropdown(!dropdown);
            }}
          >
            <span className="ml-8 flex-1 whitespace-nowrap text-left">
              {children}
            </span>
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
              <MenuLevel2
                key={id}
                menuLevel={menu.menuLevel2}
                link={`/${link}/${menu.link}`}
              >
                {menu.name}
              </MenuLevel2>
            ))}
          </ul>
        </li>
      ) : (
        <li>
          <NavLink
            to={link}
            className={({ isActive }) =>
              isActive
                ? "group flex w-full items-center rounded-lg bg-[#EBEEFF] p-2 text-base font-semibold text-blue-3 transition duration-75  "
                : "group flex w-full items-center rounded-lg p-2 text-base font-semibold text-gray-3 transition duration-75 hover:bg-[#EBEEFF] hover:text-blue-3  "
            }
          >
            <span className="ml-8 flex-1 whitespace-nowrap text-left">
              {children}
            </span>
          </NavLink>
        </li>
      )}
    </>
  );
}
