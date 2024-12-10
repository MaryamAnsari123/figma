import React from 'react'

const Hero = () => {
  return (
    <div className='justify-items-center'>
      <div className="relative w-full h-[704px] mt-[10px] bg-cover bg-[url('/image/herobg.png')]">
         
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
            <button className='bg-[#F9F9F9] py-4 px-8 font-medium text-base'>
                View Collection
            </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
