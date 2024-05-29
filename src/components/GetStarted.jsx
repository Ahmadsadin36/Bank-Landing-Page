import React from 'react'
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div className=' w-[100px] h-[100px] p-2 rounded-full bg-blue-gradient cursor-pointer flex items-center justify-center'>
      <div className=' w-full h-full bg-primary rounded-full flex items-center justify-center flex-col'>
        <div className=' flex flex-row items-start justify-start'> 
        <p className='text-gradient flex-1'>Get</p>
        <img className='w-[23px] h-[23px] object-contain flex-1' src= {arrowUp} alt="" />
        </div>
        <p className='text-gradient '>Started</p>
      </div>
    </div>
  )
}

export default GetStarted