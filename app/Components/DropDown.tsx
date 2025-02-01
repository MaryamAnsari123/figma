// DROPDOWN FOR DEKSTOP HEADER

"use client"
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full p-2 text-sm font-bold
         rounded-md hover:bg-blue-400"
      >
        <MenuIcon />
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right
         border-gray-700 bg-blue-400 rounded-lg shadow-lg">
          <div className="py-1">

          <Link
              href="/"
              className="block px-4 py-2 text-sm border-b text-white hover:bg-blue-500"
            >
              Home
            </Link>
            
            <Link
              href="/About"
              className="block px-4 py-2 text-sm border-b text-white hover:bg-blue-500"
            >
              About
            </Link>
            
            <Link
              href="/Allproducts"
              className="block px-4 py-2 text-sm border-b text-white hover:bg-blue-500"
            >
              All product
            </Link>

            <Link
              href="/wishlist"
              className="block px-4 py-2 text-sm text-white hover:bg-blue-500"
            >
             My Wishlist &#x2764;&#xFE0F;
            </Link>

          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
