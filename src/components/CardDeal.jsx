import React from 'react'
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className=' container m-auto flex flex-col md:flex-row items-center justify-start mt-8 p-3'>
      <div className=' flex-1 flex items-center justify-start flex-col'>
        <h1 className=' w-full text-left font-bold tracking-wide text-xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, sunt.</h1>
        <p className=' text-slate-400 text-left my-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio natus id laboriosam aliquam, enim sapiente amet! Officiis ad corrupti, eum, maiores nesciunt aspernatur delectus a soluta non, molestias enim suscipit?</p>
        <div className=' w-full flex items-center justify-start'>
        <Button text= "lorem lor" />
        </div>

      </div>
      <div className=' flex-1 mt-10 md:mt-0 flex items-center justify-center'>
        <img className='w-[90%] md:w-[70%]' src={card} alt="" />
      </div>
    </section>
  )
}

export default CardDeal