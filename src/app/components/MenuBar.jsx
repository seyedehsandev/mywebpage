"use client";
import { useState } from "react";
import Link from "next/link";
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

function MenuBar({ path }) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden flex flex-col items-end relative">
      {/* Menu Icon */}
      <div className="text-4xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <AiOutlineClose /> : <CgMenuGridO />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-10 bg-white shadow-xl p-5 flex flex-col gap-y-3 text-lg rounded-lg z-50 w-44">
          <li>
            <Link
              className={path == "/" ? "text-black bg-gray-200 rounded-lg p-2" : "text-black hover:text-black hover:bg-gray-100 p-2 rounded-lg"}
              href={"/"}
              onClick={toggleMenu} // Close menu on click
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={path == "/projects" ? "text-black bg-gray-200 rounded-lg p-2" :  "text-black hover:text-black hover:bg-gray-100 p-2 rounded-lg"}
              href={"/projects"}
              onClick={toggleMenu} // Close menu on click
            >
              My Projects
            </Link>
          </li>
          <li>
            <Link
              className={path == "/about" ? "text-black bg-gray-200 rounded-lg p-2" : "text-black hover:text-black hover:bg-gray-100 p-2 rounded-lg"}
              href={"/about"}
              onClick={toggleMenu} // Close menu on click
            >
              About Me
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default MenuBar;
