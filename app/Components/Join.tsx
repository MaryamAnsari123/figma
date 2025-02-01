// JOIN.TSX COMPONENT
import { CircleCheck } from 'lucide-react'
import React from 'react'

const Join = () => {
  return (
    <div className='justify-items-center mb-20 md:mt-32 lg:mt-3 p-2'>
      <div className="relative lg:w-[1440px] md:w-[680px] w-[340px] lg:h-[444px] h-[370px] bg-cover 
      bg-center bg-[url('/image/join.png')]">

        <div className='lg:w-[494px] lg:h-[265px] w-[329px] h-[330px] text-white
        absolute lg:top-[97px] lg:ml-[473px] ml-5
        flex flex-col justify-start items-center mt-7'>

        <h2 className='text-start lg:text-center lg:text-[28px] text-2xl lg:w-[494px]
         lg:h-[45px] w-[249px] h-[68px]'>
            Join the club and get the benefits</h2>

        <p className='mt-3 lg:text-center w-[259px] h-[52px] text-start text-sm
         lg:w-[470px] lg:h-[54px]'>
            Sign up for our newsletter and receive exclusive
             offers on new ranges, sales, pop up stores and more</p>

             <div className='mt-6 lg:w-[442px] lg:h-[24px] w-[259px] h-[88px] flex 
             flex-col lg:flex-row justify-start gap-2 lg:gap-[36px] items-start
              text-[16px]'>

                <p className='flex text-xs justify-start items-center gap-2'><CircleCheck /> Exclusive offers</p>
                <p className='flex text-xs justify-start items-center gap-2'><CircleCheck /> Free events</p>
                <p className='flex text-xs justify-start items-center gap-2'><CircleCheck /> Large discounts</p>
             </div>

             <div className='flex justify-center items-center lg:mt-10 mt-6 text-sm lg:text-base'>

                <input type='text' placeholder='your@email.com' 
                className='p-3 lg:w-[254px] border-2 rounded-l-md lg:h-[48px] w-[174px] h-[44px]' />
                <button className='font-bold lg:w-[118px] rounded-r-md hover:bg-green-500 lg:h-[48px] w-[98px] h-[44px] bg-[#2A254B] p-3 text-center text-sm'>
                Sign up
                </button>
             </div>

             </div>
      </div>
    </div>
  )
}

export default Join
