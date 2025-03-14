import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex mx-[159] mt-[1020]">
      <div
        className={`h-screen bg-gray-800 text-white transition-all duration-300 ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-4 text-white absolute top-4 right-4"
        >
          {isOpen ? (
            <HiX className="text-3xl" />
          ) : (
            <HiMenuAlt3 className="text-3xl" />
          )}
        </button>

        <ul className={`space-y-4 p-4 ${isOpen ? "" : "hidden"}`}>
          <li>
            <a href="/" className="hover:bg-gray-700 px-4 py-2 rounded">
              Home
            </a>
          </li>
          <li>
            <a href="/Preservation" className="hover:bg-gray-700 px-4 py-2 rounded">
              Legacy Preservation
            </a>
          </li>
          <li>
            <a href="/Story" className="hover:bg-gray-700 px-4 py-2 rounded">
            Advance Care Planning
            </a>
          </li>

        </ul>
      </div>

      {/* Main Content Area */}
      <div
        className={`transition-all duration-300 ml-${isOpen ? "64" : "20"} p-4`}
      ></div>
    </div>
  );
};

export default Sidebar;
