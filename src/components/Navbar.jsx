import React, { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";

const loginLink = "https://www.google.com";
const emailId = "support@stoxbazzar.com";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: `mailto:${emailId}` },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const handleScroll = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  }, [closeMenu]);

  return (
    <nav className="sticky top-0 z-50 bg-black lg:bg-black/40 lg:backdrop-blur-md flex items-center justify-between px-3 py-5 lg:px-36">
      {/* Logo */}
      <img
        src="/logo.png"
        alt="StoxBazzar Logo"
        className="w-[40vw] lg:w-[14vw]"
        loading="lazy"
      />

      {/* Desktop Nav */}
      <ul className="hidden lg:flex items-center gap-14 text-white font-light">
        {navLinks.map(({ label, href }) => {
          const isInternal = href.startsWith("#");
          return (
            <li key={label} className="relative group">
              {isInternal ? (
                <button
                  onClick={(e) => handleScroll(e, href.substring(1))}
                  className="border-none bg-transparent text-white transition-colors duration-200 group-hover:text-[#5A6CDE] py-1 cursor-pointer"
                >
                  {label}
                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#5A6CDE] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ) : (
                <a
                  href={href}
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 group-hover:text-[#5A6CDE] py-1"
                >
                  {label}
                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#5A6CDE] transition-all duration-300 group-hover:w-full"></span>
                </a>
              )}
            </li>
          );
        })}
      </ul>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-3 lg:gap-5">
        <a
          href={loginLink}
          className="font-light text-white hover:opacity-80 transition"
        >
          Login
        </a>
        <a href={loginLink}>
          <button className="font-light px-3 py-1 primary rounded hover:opacity-90 transition">
            Signup
          </button>
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
        aria-expanded={menuOpen}
        className="lg:hidden z-10 bg-black text-white"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Nav */}
      <aside
        className={`fixed top-0 right-0 h-full w-[70%] backdrop-blur-lg bg-gradient-to-br from-black/80 to-black/50 text-white p-6 z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <div className="flex justify-end">
          <button
            onClick={closeMenu}
            aria-label="Close mobile menu"
            className="bg-black p-2"
          >
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 mt-20 font-light text-xl">
          {navLinks.map(({ label, href }) => {
            const isInternal = href.startsWith("#");
            return (
              <li
                key={label}
                className="border-b pb-2"
              >
                {isInternal ? (
                  <button
                    onClick={(e) => handleScroll(e, href.substring(1))}
                    className="w-full text-left hover:text-[#5A6CDE] transition-colors duration-200"
                  >
                    {label}
                  </button>
                ) : (
                  <a
                    href={href}
                    className="block hover:text-[#5A6CDE] transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
