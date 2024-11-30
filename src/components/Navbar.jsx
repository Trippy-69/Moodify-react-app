import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMusic } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  return (
    <nav
      className={`text-white ${darkMode ? "bg-gray-800" : "bg-gradient-to-r from-blue-500 to-green-500"} shadow-lg`}
    >
      <div className="container mx-auto flex items-center justify-between px-2 py-2"> {/* Reduced padding */}
        {/* Logo Section */}
        <div className="flex items-center space-x-2 text-2xl font-bold">
          <Link to="/" className="flex items-center">
            <FaMusic className="w-6 h-6" /> {/* Music Icon */}
            <span className="ml-2">Moodify</span>
          </Link>
        </div>

        {/* Navbar Links and Dark Mode Toggle */}
        <div className="flex items-center space-x-4 ml-auto"> {/* Adjusted to push items to the right */}
          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    !isOpen
                      ? "M4 6h16M4 12h16M4 18h16"
                      : "M6 18L18 6M6 6l12 12"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div
            className={`md:flex md:items-center md:space-x-6 ${isOpen ? "block" : "hidden"}`}
          >
            <Link
              to="/"
              className="block py-2 md:py-0 px-4 transition-all duration-300 transform hover:scale-105 hover:text-yellow-500 hover:shadow-md"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 md:py-0 px-4 transition-all duration-300 transform hover:scale-105 hover:text-yellow-500 hover:shadow-md"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-2 md:py-0 px-4 transition-all duration-300 transform hover:scale-105 hover:text-yellow-500 hover:shadow-md"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="block py-2 md:py-0 px-4 transition-all duration-300 transform hover:scale-105 hover:text-yellow-500 hover:shadow-md"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block py-2 md:py-0 px-4 transition-all duration-300 transform hover:scale-105 hover:text-yellow-500 hover:shadow-md"
            >
              Signup
            </Link>
          </div>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 py-2 px-6 rounded-full border-2 border-white bg-transparent hover:bg-white hover:text-gray-800 transition-all duration-200"
          >
            {darkMode ? "🌙" : "☀️"} {/* Dark mode icon */}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
