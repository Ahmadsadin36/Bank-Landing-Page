import React from 'react'
import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  return (
    <nav className=' w-full p-3 flex flex-row items-center justify-center'>
      <div className=' flex flex-1 items-start justify-start'>
        <img className=' w-1/4' src={logo} alt="" />
      </div>
      <div className=' hidden lg:flex flex-row justify-end items-end'>
        <ul className=''>
          {navLinks.map((link, index) => (
            <li key={index} className= {`inline-block mx-5 
            ${ active === link.title ? " text-white" : " text-dimWhite"}`}
            onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`} className='text-white text-lg cursor-pointer'>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className=' flex flex-row items-end justify-end lg:hidden'>
        <img className=' w-[28px] h-[28px] object-contain' src={open ? close : menu} alt="" onClick={() => setOpen(!open)} />
   
      {open && (
            <ul className=' w-1/2 h-[150px] absolute right-3 top-16 bg-black-gradient rounded-xl flex flex-col items-center justify-center sidebar'>
              {navLinks.map((link, index) => (
                <li key={index} className= {`block mx-5 
                ${ active === link.title ? " text-white" : " text-dimWhite"}`}
                onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`} className='text-white text-lg cursor-pointer'>{link.title}</a>
                </li>
              ))}
            </ul>
          )}
  
      </div>
    </nav>
  )
}

export default Navbar