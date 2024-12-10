// components/Dropdown.tsx
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
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium
         rounded-md hover:bg-gray-500"
      >
        <MenuIcon />
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right border border-gray-300 divide-y divide-gray-100 rounded-md shadow-lg">
          <div className="py-1">

          <Link
              href="/"
              className="block px-4 py-2 text-sm text-black hover:bg-blue-100"
            >
              Home
            </Link>
            
            <Link
              href="/About"
              className="block px-4 py-2 text-sm text-black hover:bg-blue-100"
            >
              About
            </Link>
            
            <Link
              href="/Allproducts"
              className="block px-4 py-2 text-sm text-black hover:bg-blue-100"
            >
              All product
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
