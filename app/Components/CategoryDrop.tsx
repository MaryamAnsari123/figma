// DROPDOWN FOR SMALL SCREEN HEADER
"use client"
import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { CircleUser, MenuIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const CategoryDrop = () => {
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
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-blue-300 rounded-md shadow-lg">
          <div className="py-1">

            <div className='justify-items-center mt-6'>
          <SignedIn>
              <div className="relative rounded-full">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>

            {/* Show Sign In Button when signed out */}
            <SignedOut>
              <div className="relative hover:bg-blue-400 rounded-full">
                <SignInButton>
                  <button className="text-sm bg-blue-500 hover:bg-green-700 text-white p-2 rounded-full">
                  <CircleUser className='w-[24px] h-[24px]' />
                  </button>
                </SignInButton>
              </div>
            </SignedOut>
</div>
          <Link
              href="/"
              className="block px-4 py-2 border-b rounded-md hover:border-gray-700 text-sm text-black font-bold hover:bg-blue-500"
            >
              Home
            </Link>
            
            <Link
              href="/About"
              className="block px-4 py-2 text-sm
               text-black border-b rounded-md hover:border-gray-700 font-bold hover:bg-blue-500"
            >
              About
            </Link>
            
            <Link
              href="/Allproducts"
              className="block px-4 py-2 text-sm border-b rounded-md hover:border-gray-700
               text-black font-bold hover:bg-blue-500"
            >
              All product
            </Link>

            <Link
              href="/wishlist"
              className="block px-4 py-2 text-sm
               text-black border-b rounded-md hover:border-gray-700 font-bold hover:bg-blue-500"
            >
              My Wishlist &#x2764;&#xFE0F;
            </Link>
            
            <ul className='flex flex-col justify-start text-sm items-center'>
            <li className="bg-blue-600 mt-2 block px-14 py-1 border-b rounded-md hover:border-gray-700 text-base font-bold text-gray-300">
                Category
              </li> 
            <Link href="/PlanetPots">
              <li className="block px-2 py-1 text-sm text-black border-b rounded-md hover:border-gray-700 hover:bg-blue-500">
                Plant pots
              </li>
            </Link>

            <Link href="/caramics">
              <li className="block px-2 py-1 text-sm border-b rounded-md hover:border-gray-700
               hover:bg-blue-500">Ceramics</li>
            </Link>

            <Link href="/table">
              <li className="block px-2 py-1 text-sm text-black border-b rounded-md hover:border-gray-700
               hover:bg-blue-500">Tables</li>
            </Link>

            <Link href="/chairs">
              <li className="block px-2 py-1 text-sm text-black border-b rounded-md hover:border-gray-700 hover:bg-blue-500">Chairs</li>
            </Link>

            <Link href="/sofas">
              <li className="block px-2 py-1 text-sm text-black border-b rounded-md hover:border-gray-700
               hover:bg-blue-500">Sofa</li>
            </Link>

            <Link href="/bed">
              <li className="block px-2 py-1 text-sm text-black border-b rounded-md hover:border-gray-700 hover:bg-blue-500">Beds</li>
            </Link>

            <Link href="/tablewear">
              <li className="block px-2 py-1 text-sm text-black border-b rounded-md hover:border-gray-700 hover:bg-blue-500">TableWear</li>
            </Link>
            </ul>

          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDrop;
