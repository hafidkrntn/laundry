import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MenuLevel1 from "./menuLevel1";
import listMenu from "./listMenu.json";
import logo from "../../assets/imagedashboard.png";
import { Link, Outlet } from "react-router-dom";

export default function Sidebar() {
  const menus = listMenu.data;
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="flex bg-[#FCFCFC] py-3">
      <aside className="w-[22.5rem]" aria-label="Sidebar">
        <div className="min-h-screen overflow-y-auto rounded bg-green-navbar px-3 text-white">
          <ul className="mx-3 space-y-2">
            <li>
              <img src={logo} alt="logo laundry" className="pl-4 mt-6" />
            </li>
            <li className="hover:scale-110 duration-300">
              <Link
                to="dashboard"
                className="flex items-center rounded-lg p-2 text-base font-semibold text-gray-3 hover:bg-[#EBEEFF] hover:text-blue-3  "
              >
                <FontAwesomeIcon icon={faHouse} />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>

            {menus.map((menu, id) => {
              if (menu.menuLevel1) {
                return (
                  <MenuLevel1
                    menuLevel={menu.menuLevel1}
                    link={menu.link}
                    key={id}
                  >
                    {menu.name}
                  </MenuLevel1>
                );
              } else {
                return (
                  <MenuLevel1 key={id} link={menu.link}>
                    {menu.name}
                  </MenuLevel1>
                );
              }
            })}
          </ul>
          <div className="relative items-center ml-[6rem] mt-[38rem] text-base">
            {currentDate}
          </div>
        </div>
      </aside>
      <Outlet />
    </div>
  );
}