import React from 'react'
import Image from 'next/image'

const Card1 = () => {
  return (
    <div className='justify-items-center mt-4 md:mt-32 lg:mt-4'>
      <div className='lg:flex lg:flex-row flex flex-col justify-center p-4 gap-4 items-center w-full lg:h-[598px] h-[628px]'>

{/* 1st div */}

        <div className='lg:w-[634px] lg:h-[478px] w-[299px] h-[481px] bg-[#2A254B]'>

        <div className=' flex-col justify-center items-center gap-[100px]
        lg:w-[630px] lg:h-[440px] w-[342px] h-[281px]'>

        <div className='lg:w-[495px] text-white w-[278px] h-[63px] lg:h-[99px] p-2 mt-[64px] lg:ml-[64px]'>
        
        <p className='lg:text-[32px] text-[20px] font-medium text-start'>
        It started with a small idea
        </p>

        <p className='text-[14px] lg:text-[20px]'>
        A global brand with local beginnings, 
        our story begain in a small studio in South London in early 2014
        </p>
        </div>
      

        <div className='lg:ml-[64px] p-2 lg:mt-[208px] mt-32'>
            <button className='bg-[#F9F9F926] text-white hover:bg-blue-300 hover:shadow-lg 
            py-4 px-8 font-medium text-base w-[278px] h-[56px]'>
                View Collection
            </button>
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
