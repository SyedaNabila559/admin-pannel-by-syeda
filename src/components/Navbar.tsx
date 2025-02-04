"use client";
import { FaUser } from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu toggle

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the mobile menu open/close
  };

  return (
    <nav className="bg-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap">
        {/* Center: Links (Desktop) */}
        <div className="hidden md:flex lg:flex space-x-5 lg:pl-[400px] md:pl-[200px]">
          <Link
            href="/Dashboard"
            className="text-[#737373] hover:text-pink-500 py-2"
          >
            Dashboard
          </Link>
          <Link
            href="/Orders"
            className="text-[#737373] hover:text-pink-500 py-2"
          >
            Orders
          </Link>
          <Link
            href="/ManageOrder"
            className="text-[#737373] hover:text-pink-500 py-2"
          >
            Manage Orders
          </Link>
          <Link
            href="/Inventory"
            className="text-[#737373] hover:text-pink-500 py-2"
          >
            Inventory
          </Link>
          <Link
            href="/Account"
            className="text-[#737373] hover:text-pink-500 py-2"
          >
            Users
          </Link>
          <Link
            href="/Reviews"
            className="text-[#737373] hover:text-pink-500 py-2"
          >
            Reviews
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          {/* User Account Icon */}

          <div className="flex items-center gap-2 cursor-pointer">
            <Link href="/Account">
              {" "}
              <FaUser className="text-2xl" />
            </Link>
            {/* <Link href="/"> <button type="submit" className='bg-gradient-to-r from-black to-red-800 text-white font-semibold rounded-lg px-3 py-3 text-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-red-900 hover:to-black'>Log Out</button></Link> */}
            <Link href="/">
              <button
                type="button"
                className="bg-gradient-to-r from-red-500 to-red-800 text-white font-semibold rounded-full px-3 py-2 text-lg transition-all transform hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
              >
                <span className="flex items-center justify-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                  <span>Log Out</span>
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden block lg:hidden">
          <button
            onClick={handleMenuToggle}
            className="text-black focus:outline-none"
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full right-11 bg-white shadow-lg mt-2 w-[250px] text-center">
          <ul className="text-black flex flex-col gap-4 font-[500] text-[18px]">
            <Link
              href="/Dashboard"
              className="text-[#737373] hover:text-pink-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/Orders"
              className="text-[#737373] hover:text-pink-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Orders
            </Link>
            <Link
              href="/ManageOrder"
              className="text-[#737373] hover:text-pink-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Manage Orders
            </Link>
            <Link
              href="/Inventory"
              className="text-[#737373] hover:text-pink-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Inventory
            </Link>
            <Link
              href="/Account"
              className="text-[#737373] hover:text-pink-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Users
            </Link>
            <Link
              href="/Reviews"
              className="text-[#737373] hover:text-pink-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
