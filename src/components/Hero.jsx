import React from 'react';
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section className=' container m-auto flex flex-col-reverse md:flex-row items-center justify-start p-3' id='home'>
      <div className=' flex-1 md:mr-5 flex flex-col items-start justify-start mt-10 md:mt-0'>
        <p className=' text-white'>Lorem ipsum dolor sit amet.</p>
        <div className=' flex items-center justify-between flex-row my-3'>
          <h1 className=' text-white mr-5'>
            Lorem, ipsum. <span className='text-gradient'>lorem</span> Lorem, ipsum dolor.
          </h1>
          <GetStarted />
        </div>
        <p className=' text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laboriosam sint, dignissimos numquam modi eveniet nemo reprehenderit ullam culpa nesciunt!</p>
      </div>
      <div className=' flex-1 flex items-center justify-center md:justify-end'>
      <div className='rounded-full bg-gr flex items-center justify-center w-1/2 md:w-[70%]'>
        <img className=' ' src= {robot} alt="" />
      </div>
      </div>
    </section>
  )
}

export default Hero