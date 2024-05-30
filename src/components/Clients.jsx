import React from 'react'
import { clients } from "../constants";

const Clients = () => {
  return (
    <section className=' container m-auto p-3 mt-8 flex items-center justify-center' id='clients'>
      <div className=' w-full grid grid-rows-2 grid-cols-2 sm:grid-rows-1 sm:grid-cols-4 gap-3'>
        {clients.map((clients) => {
          return (
            <div className=' flex-1 flex items-center justify-center p-2' key={clients.id}>
              <img className=' w-[80%] md:w-[50%]' src={clients.logo} alt={clients.id} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Clients