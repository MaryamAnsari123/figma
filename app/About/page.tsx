import React from 'react'
import Card1 from '../Components/Card1'
import Image from 'next/image'
import Comp1 from '../Components/Comp1'
import Join from '../Components/Join'
import About from '../Components/About'


const page = () => {
  return (
    <div className='justify-items-center'>
        <div>
      <Card1 />
      </div>

      <div>
      <About />
      </div>    

<div>
  <Comp1 />
</div>

<div>
  <Join />
</div>

    </div>
  )
}

export default page
