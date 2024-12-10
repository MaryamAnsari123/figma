import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='justify-items-center mt-20 md:mt-48'>
      <div className='flex flex-col lg:flex lg:flex-row justify-center 
      items-center w-[342px] h-[639px] lg:w-full lg:h-[603px] gap-2'>

      <div className=''>
        <Image src="/image/about.png"
        alt='about'
        width={340}
        height={340}
        className='lg:w-[702px] lg:h-[603px]'/>
    </div>

<div className='w-[311px] h-[596px] lg:w-[720px] lg:h-[603px] bg-gray-200'>
    <div className='w-[311px] h-[396px] lg:w-[536px] lg:h-[225px]'>
    
    <p className='mt-8 text-lg w-[263px] h-[84px] lg:w-[536px] lg:mt-[72px] lg:ml-[84px] lg:h-[68px] font-medium text-start'>
    Our service isnt just personal, its actually
    hyper personally exquisite
        </p>

        <p className='mt-2 w-[263px] h-[168px] text-sm lg:w-[536px] lg:mt-4 
        lg:ml-[84px] lg:h-[68px]'>
        When we started Avion, the idea was simple. Make high quality 
        furniture affordable and available for the mass market. <br /> Handmade, 
        and lovingly crafted furniture and homeware is what we live, breathe 
        and design so our Chelsea boutique become the hotbed 
        for the London interior design community.
        </p>
    </div>

    <div className='lg:mt-[156px] text-left mx-2 mb-3 lg:ml-[84px]'>
            <button className='bg-[#F9F9F9] w-[300px] h-[56px] lg:w-[247px] rounded-md text-sm'>
            Get in touch
            </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
