import React from 'react'
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className=' w-full mt-10 p-3 flex flex-col items-center justify-center'>
      <div className=' w-full flex flex-col-reverse sm:flex-row items-center justify-start'>
        <div className=' flex-1 items-start justify-start flex-col flex sm:mr-8 mt-8 sm:mt-0'>
          <img className=' w-1/2 sm:w-[70%] md:w-[30%]' src={logo} alt="" />
          <p className=' w-full text-left text-slate-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, accusantium?</p>
        </div>
        <div className=' flex-1 flex items-start flex-row justify-start flex-wrap gap-2'>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.id} className=' flex flex-1 flex-col items-start justify-start'>
              <h3 className=' text-white my-2'>{footerLink.title}</h3>
              {footerLink.links.map((link) => (
                <a key={link.id} className=' cursor-pointer text-slate-400 hover:text-secondary'>{link.name}</a>
              ))}
            </div>
          ))}

        </div>
      </div>
      <div className=' w-full flex flex-col md:flex-row items-center justify-between border-t border-slate-400 mt-2'>
        <div className=' flex-1 flex flex-col items-start justify-start my-3 w-full '>
          <p className=' text-white w-full text-left'>© 2021 Modern Bank. All rights reserved.</p>
          <p className=' text-slate-400 w-full text-left'>Developed by <a href="https://github.com/Ahmadsadin36" className='hover:text-secondary capitalize'>Ahmad sadin</a></p>
        </div>
        <div className=' flex-1 flex items-center justify-start md:justify-center w-full gap-3'>
          {socialMedia.map((social) => (
            <a key={social.id} className=' cursor-pointer text-white hover:text-secondary'>
              <img src={social.icon} alt="" />
            </a>
          ))}
          </div>
      </div>
    </footer>
  )
}

export default Footer