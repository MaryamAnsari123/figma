import { CircleUser, Search, ShoppingCart } from 'lucide-react'
import React from 'react'
import Dropdown from './DropDown'

const Header = () => {
  return (
    <div className='justify-items-center'>
      <div className='flex flex-col justify-center items-center w-full h-[132px]'>
            {/* Top */}
            <div className='bg-white mt-[20px] gap-[667px] flex w-full h-[30px] justify-center items-center'>
            
            <div>
            <Search className='w-[24px] h-[24px]' />
            </div>

            <div>
            <h1 className='text-2xl'>
            Avion
            </h1>
            </div>

            <div className='flex justify-center items-center gap-2'>
              <Dropdown />
            <ShoppingCart className='w-[24px] h-[24px]' />
            <CircleUser className='w-[24px] h-[24px]' />
            </div>

            
                
            </div>

            {/* Line */}

            <div className='w-[1386px] border-[1px] mt-[20px] mx-[28px] h-0 bg-gray-200'>

            </div>

            {/* Navbar */}

            <div className='w-[672px] h-[22px] mt-[20px]'>
            <ul className='flex justify-center text-sm items-center gap-[44px]'>
                <li className='hover:border-b hover:border-gray-400'>Plant pots</li>
                <li className='hover:border-b hover:border-gray-400'>Ceramics</li>
                <li className='hover:border-b hover:border-gray-400'>Tables</li>
                <li className='hover:border-b hover:border-gray-400'>Chairs</li>
                <li className='hover:border-b hover:border-gray-400'>Crockery</li>
                <li className='hover:border-b hover:border-gray-400'>Tableware</li>
                <li className='hover:border-b hover:border-gray-400'>Cutlery</li>
            </ul>
            </div>
      </div>
    </div>
  )
}

export default Header




