// ABOUT PAGE
import React from 'react'
import Card1 from '../Components/Card1'
import Comp1 from '../Components/Comp1'
import Join from '../Components/Join'
import About from '../Components/About'
import Link from 'next/link'


const page = () => {
  return (
    <div className='justify-items-center mt-2'>

      <div className='lg:w-[1440px] md:w-[730px] p-8 w-[280px] h-[277px] flex flex-col md:flex-row 
      lg:gap-48 gap-4 md:gap-20 justify-center items-center'>

        <p className='lg:text-2xl text-sm'>
        A brand built on the love of craftmanship, <br />
        quality and outstanding customer service
        </p>

<Link href="/Allproducts">
        <button className='bg-gray-200 hover:bg-blue-300 hover:shadow-lg 
            py-2 px-2 font-medium border-2 text-base md:w-[192px] w-[250px] h-[56px]'>
                View Collection
            </button>
            </Link>

      </div >

        <div>
      <Card1 />
      </div>

      <div>
      <About />
      </div>  
        
{/* render our qualities component */}
<div className='mt-20'>
  <Comp1 />
</div>

<div className='mt-10'>
  <Join />
</div>

    </div>
  )
}

export default page
