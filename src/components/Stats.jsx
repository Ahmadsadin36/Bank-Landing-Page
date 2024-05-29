import React from 'react'
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section className=' container m-auto p-3 flex flex-col md:flex-row items-center justify-around mt-8'>
     {stats.map((stat, index) => ((
        <div key={index} className='flex flex-row flex-1 items-center justify-center text-white p-3'>
          <h2 className=' text-gradient mr-2 md:mr-1 font-semibold'>{stat.title}</h2>
          <p className=' font-bold text-2xl'>{stat.value}</p>
        </div>
     )))}

    </section>
  )
}

export default Stats