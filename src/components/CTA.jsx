import React from 'react'
import Button from "./Button";

const CTA = () => {
  return (
    <section className=' container m-auto p-5 mt-8 flex flex-col md:flex-row items-center justify-between bg-black-gradient-2 rounded-[20px] box-shadow '>
      <div className=' flex-1 flex flex-col items-center justify-start'>
        <h2 className=' font-bold text-white text-xl w-full text-left'>Lorem ipsum dolor sit amet.</h2>
        <p className=' text-slate-400 my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magni deleniti veritatis ut nobis facere ullam eos magnam enim id?</p>
      </div>
      <div className=' flex-1 flex items-start justify-end'>
        <Button text='Get Started' />
      </div>
    </section>
  )
}

export default CTA