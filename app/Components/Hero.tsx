// DEKSTOP HERO SECTION
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='justify-items-center'>
      <div className="relative w-[1440px] mt-[10px] bg-cover bg-center
       bg-[url('/image/herobg.png')] opacity-100 bg-no-repeat h-screen">
         
         {/* White div */}
        <div className=' flex-col justify-center items-center gap-[70px]
        w-[630px] h-[440px] bg-white absolute top-[130px] ml-[730px]'>

        <div className='w-[513px] h-[137px] mt-[48px] ml-[56px]'>
        
        <p className='h-[90px] w-[316px] text-xl font-medium text-start'>
        Luxury homeware for people who love timeless design quality
        </p>

        <p>
          Shop for New Spring 2022 collection today
        </p>
        </div>
      

        <div className='ml-[56px] mt-36'>
        <Link href="/Allproducts">
            <button className='bg-[#F9F9F9] rounded-md hover:bg-blue-200 border-2 animate-bounce py-4 px-8 font-medium text-base'>
                View Collection
            </button>
            </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
