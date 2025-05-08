import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const loginLink = "https://www.google.com";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black lg:bg-[linear-gradient(110deg,_#000000_50%,_#05330E_100%)] flex items-center justify-between px-3 py-5 lg:px-36">
      <img src="/logo.png" alt="" className="w-[40vw] lg:w-[14vw]" />
      {/* Desktop Nav Links */}
      <div className="hidden lg:flex items-center gap-18 text-white font-light">
        <a href="#about" className="hover:text-[#5A6CDE] hover:cursor-pointer">
          About
        </a>
        <a href="mailto:support@stoxbazzar.com" className="hover:text-[#5A6CDE] hover:cursor-pointer">
          Contact
        </a>
        <a href="#faq" className="hover:text-[#5A6CDE] hover:cursor-pointer">
          FAQ
        </a>
      </div>

      {/* Right Section (Login + Signup + Menu Icon) */}
      <div className="flex items-center gap-3 lg:gap-5">
        <a href={loginLink} className="font-light cursor-pointer">Login</a>
        <a href={loginLink}>
          <button className="font-light px-3 py-1 primary">Signup</button>
        </a>
        <div className="lg:hidden z-50" onClick={toggleMenu}>
          {menuOpen ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`z-50 fixed top-0 right-0 h-full w-[70%] shadow-lg backdrop-blur-xl overflow-hidden 
          bg-gradient-to-br from-black/25 to-black/0 text-white p-6  duration-500 ease-in-out transform transition-all ${
            menuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          } lg:hidden`}
      >
        {/* Close Button inside menu */}
        <div className="flex justify-end">
          <X size={28} onClick={toggleMenu} />
        </div>
        <ul className="flex flex-col gap-6 mt-20 font-light text-xl">
          <li className="border-b pb-2">
            <a href="#about" className="hover:text-[#5A6CDE]" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li className="border-b pb-2">
            <a href="mailto:support@stoxbazzar.com" className="hover:text-[#5A6CDE]" onClick={toggleMenu}>
              Contact
            </a>
          </li>
          <li className="border-b pb-2">
            <a href="#faq" className="hover:text-[#5A6CDE]" onClick={toggleMenu}>
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
