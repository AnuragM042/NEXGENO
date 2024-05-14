import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button from "../Button";
import NavLinks from "./NavLinks";
import { FaSearch } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-[60] p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center  gap-5 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0C5ADB] rounded-sm text-white flex items-center text-sm justify-center items-center">
              <FaSearch />
            </div>
            <div className="w-8 h-8 bg-[#0C5ADB] rounded-sm text-white flex items-center text-sm justify-center items-center">
              <FaBasketShopping />
            </div>
          </div>
        </ul>

        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white z-50 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
