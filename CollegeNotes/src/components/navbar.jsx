import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth0();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-screen flex items-center py-5 fixed z-50 top-0 bg-emerald-500 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-white text-2xl font-bold select-none"
          onClick={() => {
            setIsOpen(false);
            window.scrollTo(0, 0);
          }}
        >
          HBTU Notes
        </Link>
        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
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
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex items-center lg:space-x-6 transition-all duration-300 ease-in-out`}
        >
          <ul
            className={`lg:flex items-center flex-col lg:flex-row lg:space-y-0 space-y-4 lg:space-x-6 mt-4 lg:mt-0`}
          >
            <NavItem href="/" onClick={() => setIsOpen(false)}>
              Home
            </NavItem>
            <NavItem href="/about" onClick={() => setIsOpen(false)}>
              About Us
            </NavItem>
            <NavItem href="/contact" onClick={() => setIsOpen(false)}>
              Contact Us
            </NavItem>
            {isAuthenticated ? (
              <NavItem
                onClick={() => {
                  logout({ returnTo: window.location.origin });
                  setIsOpen(false);
                }}
              >
                Logout
              </NavItem>
            ) : (
              <>
                <NavItem href="/login" onClick={() => setIsOpen(false)}>
                  Login
                </NavItem>
                <NavItem href="/signup" onClick={() => setIsOpen(false)}>
                  SignUp
                </NavItem>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, children, onClick }) => {
  return (
    <li className="w-full lg:w-auto">
      <Link
        to={href}
        onClick={onClick}
        className="block text-center text-white hover:text-gray-300 transition-colors duration-300 font-semibold"
      >
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
