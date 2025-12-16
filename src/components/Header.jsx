import React from "react";
import { Link } from "react-router-dom";
import useMobileMenu from "../hooks/useMobileMenu";
import Footer from "./Footer";

const Header = ({ currentPage }) => {
  const { isMenuOpen, toggleMenu } = useMobileMenu();

  // Function to get link classes based on whether it's the current page
  const getLinkClasses = (pageName) => {
    const baseClasses =
      "text-gray-200 hover:text-primary transition-colors duration-200";
    const activeClasses =
      "font-semibold text-primary border-b-2 border-primary";
    return `${baseClasses} ${currentPage === pageName ? activeClasses : ""}`;
  };

  return (
    <header className="bg-black/70 backdrop-blur sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div>
              <div className="text-2xl text-primary font-bold">Spitiwilly</div>
              <div className="text-xs text-gray-400">
                Co.Living — Thiruvannur
              </div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className={getLinkClasses("home")}>
              Home
            </Link>
            <Link to="/about" className={getLinkClasses("about")}>
              About
            </Link>
            {/* <Link to="/pricing" className={getLinkClasses("pricing")}>
              Pricing
            </Link> */}
            <Link to="/community" className={getLinkClasses("community")}>
              Community
            </Link>
            <Link to="/contact" className={getLinkClasses("contact")}>
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-block bg-primary text-black px-4 py-2 rounded-md hover:opacity-95 transition-opacity duration-200"
            >
              Book Now
            </Link>
            <button
              id="mobile-menu-btn"
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden px-4 pb-6 pt-2 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-4 pt-2">
          <Link
            to="/"
            className={`block text-gray-200 hover:text-primary py-2 ${
              currentPage === "home" ? "font-semibold text-primary" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`block text-gray-200 hover:text-primary py-2 ${
              currentPage === "about" ? "font-semibold text-primary" : ""
            }`}
          >
            About
          </Link>
          {/* <Link
            to="/pricing"
            className={`block text-gray-200 hover:text-primary py-2 ${
              currentPage === "pricing" ? "font-semibold text-primary" : ""
            }`}
          >
            Pricing
          </Link> */}
          <Link
            to="/community"
            className={`block text-gray-200 hover:text-primary py-2 ${
              currentPage === "community" ? "font-semibold text-primary" : ""
            }`}
          >
            Community
          </Link>
          <Link
            to="/contact"
            className={`block text-gray-200 hover:text-primary py-2 ${
              currentPage === "contact" ? "font-semibold text-primary" : ""
            }`}
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className="inline-block bg-primary text-black px-4 py-2 rounded-md mt-2 text-center"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
