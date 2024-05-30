import React from 'react'
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section className=' container m-auto p-3 mt-8 flex flex-col items-center justify-start'>
      <div className=' w-full flex justify-between items-center'>
        <h1 className=' flex-1 font-bold tracking-wide text-xl text-left text-white mr-2'>Lorem ipsum dolor sit amet consectetur.</h1>
        <p className=' flex-1 text-left text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, alias accusamus optio voluptatem soluta nostrum officia eius perspiciatis qui id.</p>
      </div>
      <div className=' w-full flex flex-row flex-wrap mt-10'>
        {feedback.map((item) => (
          <FeedbackCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials