//SHOW PRODUCT SECTION FOR ABOUT PAGE

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card1 = () => {
  return (
    <div className='justify-items-center mt-4 md:mt-32 lg:mt-4'>
      <div className='lg:flex lg:flex-row flex flex-col justify-center p-2 gap-4 
      items-center w-full lg:h-[598px] h-[628px]'>

{/* 1st div */}

        <div className='md:w-[634px] p-2 lg:h-[478px] w-[300px] h-[481px] bg-[#2A254B]'>

        <div className='flex-col justify-center items-center gap-[100px]
        lg:w-[630px] lg:h-[440px] w-[342px] h-[281px]'>

        <div className='md:w-[495px] text-white w-[278px] h-[63px] lg:h-[99px] p-2 mt-[64px] lg:ml-[64px]'>
        
        <p className='md:text-[32px] text-[20px] font-medium text-start'>
        It started with a small idea
        </p>

        <p className='text-[14px] lg:text-[20px]'>
        A global brand with local beginnings, 
        our story begain in a small studio in South London in early 2014
        </p>
        </div>
      

        <div className='lg:ml-[64px] p-2 lg:mt-[208px] mt-32'>
        <Link href="/Allproducts">
      <button className='bg-[#F9F9F9] animate-bounce w-[270px] hover:bg-blue-200 hover:border-2 border-gray-400 py-4 px-8 font-medium text-base'>
                View Collection
            </button>
            </Link>
        </div>
        </div>

        </div>

        <div>
            <Image src="/image/bg.png"
        alt='Pic4'
        width={630}
        height={478} />
        </div>

      </div>
    </div>
  )
}

export default Card1
