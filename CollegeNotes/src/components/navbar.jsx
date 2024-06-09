import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`w-screen flex items-center py-5 fixed z-50  top-0 bg-emerald-500`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-white text-2xl font-bold select-none"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          HBTU Notes
        </Link>
        {/* Hamburger Icon */}
        <div className="flex">
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Menu */}
        <div
          className={`lg:flex items-center space-x-6 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <ul className="lg:flex items-center space-x-6">
            <NavItem href="/" onClick={() => setActive()}>
              Home
            </NavItem>
            <NavItem href="/about">About Us</NavItem>
            <NavItem href="/contact">Contact Us</NavItem>
            <NavItem href="/login">Login</NavItem>
            <NavItem href="/signup">SignUp</NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, children }) => {
  return (
    <li>
      <Link
        to={href}
        className="text-white hover:text-gray-300 transition-colors duration-300"
      >
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
