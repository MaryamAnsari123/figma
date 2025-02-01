// DEKSTOP NAVBAR

"use client"
import { useCart } from '../context/CartContext';
import { CircleUser, ShoppingCart } from 'lucide-react';
import React from 'react';
import Dropdown from './DropDown';
import Link from 'next/link';
import SearchBar from './Search';
import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';

const Header = () => {
  const { cartTotalQuantity } = useCart();

  return (
    <div className='justify-items-center'>
      <div className='flex flex-col justify-center items-center w-[1440px] h-[232px]'>
        {/* Top */}
        <div className='bg-white mt-[20px] gap-[356px] flex w-[1440px] h-[30px] justify-center items-center'>
          <div className='w-72'>
            <SearchBar />
          </div>

          <div className='w-72'>
            <h1 className='text-3xl'>Avion</h1>
          </div>

          <div className='flex justify-center items-center gap-2 relative'>
            <Dropdown />

            <button className="relative hover:bg-blue-400 p-3 rounded-full">
              <Link href="/ShoppingBasket">
                <ShoppingCart className='w-[24px] h-[24px]' />
              </Link>
              {cartTotalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartTotalQuantity}
                </span>
              )}
            </button>

            {/* Show UserButton when signed in */}
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
        </div>

        {/* Line */}
        <div className='w-[1386px] border-[1px] mt-[20px] mx-[28px] h-0 bg-gray-200'></div>

        {/* Navbar */}
        <div className='w-[672px] text-gray-800 font-medium h-[22px] mt-[20px]'>
          <ul className='flex justify-center text-sm items-center gap-[44px]'>
            <Link href="/PlanetPots">
              <li className='hover:border-b hover:border-gray-400'>Plant pots</li>
            </Link>

            <Link href="/caramics">
              <li className='hover:border-b hover:border-gray-400'>Ceramics</li>
            </Link>

            <Link href="/table">
              <li className='hover:border-b hover:border-gray-400'>Tables</li>
            </Link>

            <Link href="/chairs">
              <li className='hover:border-b hover:border-gray-400'>Chairs</li>
            </Link>

            <Link href="/sofas">
              <li className='hover:border-b hover:border-gray-400'>Sofa</li>
            </Link>

            <Link href="/bed">
              <li className='hover:border-b hover:border-gray-400'>Beds</li>
            </Link>

            <Link href="/tablewear">
              <li className='hover:border-b hover:border-gray-400'>TableWear</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
