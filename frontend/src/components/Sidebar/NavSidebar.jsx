import React, { useState, useEffect } from "react";
import useWindowSize from "../useWindowSize";

import { HiMenuAlt3 } from "react-icons/hi";
import {
  LayoutDashboard,
  CalendarDays,
  CalendarClock,
  ListTodo,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../../assets/logooption1.png";

import "../Sidebar/NavSidebar"; // Import your CSS file

const NavSidebar = () => {
  const windowSize = useWindowSize();

  const menus = [
    { name: "Dashboard", link: "/", icon: LayoutDashboard },
    { name: "Requests", link: "/requests", icon: CalendarClock },
    { name: "Manage", link: "/manage", icon: ListTodo, margin: true },
    { name: "Setting", link: "/settings", icon: Settings },
  ];
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0); // Track the selected menu index

  useEffect(() => {
    // Update the 'open' state when window size changes
    if (windowSize.width < 1200) {
      setOpen(false);
    }
  }, [windowSize.width]);

  return (
    <div
      className={`bg-[#0e0e0e] ${
        open ? "w-80 h-screen" : "w-16 h-screen"
      } duration-500 text-gray-100 px-4`}
      style={{ position: "sticky", top: 0, zIndex: 50 }}
    >
      <div className="py-3 flex justify-between items-center">
        <div className={`transition-all ${open ? "w-20 h-20" : "w-0"}`}>
          <img src={logo} className="h-full" alt="Logo" />
        </div>
        {windowSize.width && windowSize.width >= 1200 && (
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        )}
      </div>

      {/* White line separator above the menu items */}
      <div
        className={`h-0.5 w-full bg-white mt-4 ${open ? "block" : "hidden"}`}
      />

      <div className="mt-12 flex flex-col gap-8 relative">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            onClick={() => setSelectedMenu(i)} // Set the selected menu index
            className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md ${
              selectedMenu === i ? "bg-[#01663E]" : "" // Apply green background to the selected menu
            } ${menu?.margin && i !== 0 ? "mt-0" : ""}`}
          >
            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-[#C2F6CA] font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavSidebar;
