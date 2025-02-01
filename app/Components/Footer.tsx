// FOOTER.TSX
import React from 'react'

const Footer = () => {
  return (
    <div className='justify-items-center'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:flex justify-center gap-[56px] 
       items-center p-7 w-[350px] md:w-full lg:h-[310px] h-[868px] md:h-[468px] bg-[#2A254B]'>

        {/* 1st div */}
        <div className='w-[163px] h-[175px] text-white'>
<ul className='flex flex-col justify-start text-[16px] items-start space-y-2 '>
<li>Menu</li>
<li>New arrivals</li>
<li>Best sellers</li>
<li>Recently viewed</li>
<li>Popular this week</li>
<li>All products</li>
</ul>
        </div>

{/* 2nd div */}
<div className='w-[163px] h-[206px] text-white'>
<ul className='flex flex-col justify-center text-[16px] items-start space-y-2 '>
<li>Categories</li>
<li>Crockery</li>
<li>Furniture</li>
<li>Homeware</li>
<li>Plant pots</li>
<li>Chairs</li>
<li>Crockery</li>
</ul>
        </div>

         {/* 3rd div */}
         <div className='w-[163px] h-[175px] text-white'>
<ul className='flex flex-col justify-center text-[16px] items-start space-y-2 '>
<li>Our company</li>
<li>About us</li>
<li>Vacancies</li>
<li>Contact us</li>
<li>Privacy</li>
<li>Returns policy</li>
</ul>
        </div>

        {/* 4th */}
        <div className='flex flex-col justify-center w-[305px] items-start'>
            <div>
            <p className='font-mono text-base text-white'>Join our mailing list</p>
            </div>

            <div className='flex justify-center items-center mt-2 
            text-sm lg:text-base'>

<input type='text' placeholder='your@email.com' 
className='lg:w-[309px] md:w-[409px] text-white font-bold p-3 lg:h-[48px] w-[174px] rounded-l-md h-[44px] bg-[#FFFFFF26]'/>

<button className='lg:w-[118px] lg:h-[48px] w-[98px] h-[44px] text-black font-bold
 bg-white p-3 hover:bg-blue-200 rounded-r-md
text-center text-sm'>
Sign up
</button>
</div>

        </div>
      </div>
      <hr />
    <div className='text-center bg-[#2A254B] text-white font-medium p-2
     w-[350px] md:w-full h-20'>
    <p>Copyright 2022 Avion LTD</p>
    <p>Made By <b>MARYAM ANSARI</b></p>
    </div>
    </div>
  )
}

export default Footer
