import React from 'react'
import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <section className=' container m-auto p-3 mt-8 flex flex-col-reverse md:flex-row items-center justify-start'>
      <div className=' flex-1 flex items-center justify-center mt-3 md:mt-0 relative'>
        <img className=' md:w-[80%] w-[70%] relative z-10' src={bill} alt="" />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'></div>
        <div className='absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient'></div>
      </div>
      <div className=' flex-1 flex flex-col items-center justify-start'>
        <h1 className=' w-full text-left font-bold tracking-wide text-white text-xl'>Lorem ipsum dolor sit amet consectetur.</h1>
        <p className=' w-full text-left text-slate-400 my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, magnam aliquam animi unde suscipit aliquid rerum nam voluptatum voluptates illo?</p>
        <div className=' w-full flex flex-row items-start justify-start flex-wrap'>
          <img className=' w-1/3' src={apple} alt="" />
          <img className=' w-1/3' src={google} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Billing