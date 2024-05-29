import React from 'react'
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Features = () => {
  return (
    <div className='flex flex-col items-center justify-start w-full'>
      <div className='grid grid-cols-1 gap-4'>
        {features.map((feature, index) => (
          <div key={index} className='flex items-center justify-start flex-row'>
            <div className='flex items-center justify-center mr-5'>
              <img src={feature.icon} alt={feature.title} className=' w-14 h-14'/>
            </div>
            <div className='flex flex-col items-start justify-start'>
              <h1 className='text-lg font-bold text-white'>{feature.title}</h1>
              <p className='text-slate-400'>{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Business = () => {
  return (
    <section className=' container p-3 m-auto mt-8 flex flex-col md:flex-row items-center justify-start'>
     <div className=' flex flex-1 flex-col items-start justify-start mb-10 md:mb-0 p-2'>
      <h1 className=' text-xl tracking-wide font-bold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p className=' text-slate-400 my-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sed possimus dignissimos saepe, laborum ea qui animi minus nam. Commodi!</p>
      <Button text='Get Started' />
     </div>
     <div className=' flex flex-1 items-center justify-start md:ml-2 p-2'>
      <Features/>
     </div>
    </section>
  )
}

export default Business