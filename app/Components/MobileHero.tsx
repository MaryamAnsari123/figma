// HERO SECTION FOR SMALL DEVICE

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const MobileHero = () => {
  return (
    <div className='justify-items-center mt-4'>
      <div className='flex flex-col justify-center md:w-[630px] gap-16 items-center relative w-[342px] h-[639px]'>

    <div className='w-[311px] h-[256px] absolute top-[47px] ml-[16px]'>
    
    <p className='text-lg w-[263px] font-medium text-start'>
        Luxury homeware for people who love timeless design quality
        </p>

        <p className='mt-6 w-[263px] text-sm'>
        With our new collection, view over 400 
        bespoke pieces from homeware through to furniture today
        </p>
        <div className='mt-10 justify-items-center'>
          
            <Link href="/Allproducts">
            <button className='bg-[#F9F9F9] rounded-md w-[280px] hover:bg-blue-200 border-2 animate-bounce py-4 px-8 font-medium text-base'>
                View Collection
            </button>
            </Link>
    </div>
        </div>
      
{/* picture */}
        

    <div className='absolute top-[335px]'>
        <Image src="/image/herobg.png"
        alt='bghero'
        width={340}
        height={340}/>
    </div> 
      </div>
    </div>
  )
}

export default MobileHero
