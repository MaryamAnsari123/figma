// OUR QUALITIES COMPONENT

import { AppWindow, CircleCheck, TreePalm, Truck } from 'lucide-react'
import React from 'react'

const Comp1 = () => {
  return (
    <div className='lg:mx-20 mt-10'>
      <div className='w-[300px] justify-items-center md:w-full lg:h-[476px] mx-2'>

            <h3 className='text-center animate-bounce w-full font-bold lg:text-2xl text-lg pt-[40px]'>What makes our brand different 
            </h3> 

            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:flex-row lg:flex
             justify-center gap-[10px] items-center'>
    
            {/* 1st */}
            <div className='w-[280px] md:w-[300px] h-[244px] hover:shadow-lg hover:shadow-black bg-gray-100'>

            <div className='flex flex-col justify-center
            mx-14 my-12 items-start gap-4 p-2 w-[209px] h-[148px]'>
                
                <Truck />
                <h4 className='text-sm font-semibold'>Next day as standard</h4>
                <p className='text-xs'>Order before 3pm and get your order the next day as standard</p>
            </div>

            </div>

            {/* 2nd */}
            <div className='w-[280px] md:w-[300px] hover:shadow-lg hover:shadow-black h-[244px] bg-gray-100'>
            <div className='flex flex-col justify-center
            mx-14 my-12 items-start gap-4 p-2 w-[209px] h-[148px]'>
                
                <CircleCheck />
                <h4 className='text-sm font-semibold'>Made by true artisans</h4>
                <p className='text-xs'>Handmade crafted goods made with real passion 
                  and craftmanship</p>
            </div>

            </div>

            {/* 3rd */}
            <div className='w-[280px] hover:shadow-lg hover:shadow-black md:w-[300px] h-[244px] bg-gray-100'>

            <div className='flex flex-col justify-center
            mx-14 my-12 items-start gap-4 p-2 w-[209px] h-[148px]'>
                
                <AppWindow />
                <h4 className='text-sm font-semibold'>Unbeatable prices</h4>
                <p className='text-xs'>For our materials and quality you wont find better prices anywhere</p>
            </div> 

            </div>

            {/* 4th */}
            <div className='w-[280px] md:w-[300px] hover:shadow-lg hover:shadow-black h-[244px] bg-gray-100'>

            <div className='flex flex-col justify-center
            mx-14 my-12 items-start gap-4 p-2 w-[209px] h-[148px]'>
                
                <TreePalm />
                <h4 className='text-sm font-semibold'>Recycled packaging</h4>
                <p className='text-xs'>We use 100% recycled to ensure our footprint is more manageable</p>
            </div>
            
            </div>

            </div>
      </div>
    </div>
  )
}

export default Comp1
