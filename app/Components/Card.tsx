import React from 'react'
import Image from 'next/image'

const Card = () => {
  return (
    <div className='justify-items-center'>
      <div className='grid grid-cols-2 lg:flex lg:justify-center lg:items-center 
      gap-4 md:gap-3 lg:gap-2 lg:w-full w-full md:w-96 h-[634px]'>

        {/* 1st card */}
        
        <div className='flex flex-col gap-2 justify-start items-start w-[163px] h-[288px] lg:w-[305px] lg:h-[462px]'>
        <Image 
        src="/image/r1.png"
        alt='Pic1'
        width={305}
        height={375}/>

<h4 className='mt-4 lg:text-[20px] text-sm font-medium'>The Dandy chair</h4>
<p className='lg:text-[18px] text-xs'>£250</p>
        </div>

 {/* 2nd card */}
        
 <div className='flex flex-col gap-2 justify-start items-start w-[163px] h-[288px] lg:w-[305px] lg:h-[462px]'>
        <Image 
        src="/image/r2.png"
        alt='Pic2'
        width={305}
        height={375}/>

        <h4 className='mt-4 lg:text-[20px] text-sm font-medium'>Rustic Vase Set</h4>
        <p className='lg:text-[18px] text-xs'>£155</p>
        </div>

 {/* 3rd card */}
 <div className='flex flex-col gap-2 justify-start items-start w-[163px] h-[288px] lg:w-[305px] lg:h-[462px]'>

        <Image 
        src="/image/r3.png"
        alt='Pic3'
        width={305}
        height={375}/>
 
 <h4 className='mt-4 lg:text-[20px] text-sm font-medium'>The Silky Vase</h4>
 <p className='lg:text-[18px] text-xs'>£125</p>
        </div>

 {/* 4th card */}
        
 <div className='flex flex-col gap-2 justify-start items-start w-[163px] h-[288px] lg:w-[305px] lg:h-[462px]'>
        <Image 
        src="/image/r4.png"
        alt='Pic4'
        width={305}
        height={375}/>

<h4 className='mt-4 lg:text-[20px] text-sm  font-medium'>The Lucy Lamp</h4>
<p className='lg:text-[18px] text-xs'>£399</p>
        </div>

      </div>

        {/* Button */}

      <div className='mb-4'>
      <button className='bg-[#F9F9F9] py-4 px-8 font-medium text-base'>
                View Collection
            </button>
      </div>
    </div>
  )
}

export default Card
