import React from 'react'
import Image from 'next/image'
const MobileHero = () => {
  return (
    <div className='justify-items-center'>
      <div className='flex flex-col justify-center gap-16 items-center relative w-[342px] h-[639px]'>

    <div className='w-[311px] h-[256px] absolute top-[47px] ml-[16px]'>
    
    <p className='text-lg w-[263px] font-medium text-start'>
        Luxury homeware for people who love timeless design quality
        </p>

        <p className='mt-6 w-[263px] text-sm'>
        With our new collection, view over 400 
        bespoke pieces from homeware through to furniture today
        </p>
        <div className='mt-6 text-center'>
            <button className='bg-[#F9F9F9] h-[56px] w-[247px] rounded-md text-sm'>
                View Collection
            </button>
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
