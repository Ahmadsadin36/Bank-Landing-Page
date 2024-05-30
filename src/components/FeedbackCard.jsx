import React from 'react'
import { quotes } from "../assets";

const FeedbackCard = ({content, name, title, img}) => {
  return (
    <div className=' flex-1 flex items-center justify-start flex-col p-2 m-2 transition-all hover:bg-gray-800 rounded-lg'>
      <div className=' flex items-start justify-start w-full'>
        <img className=' w-7 h-7' src={quotes} alt="" />
      </div>
      <p className=' text-left w-full text-slate-400 my-3'>{content}</p>
      <div className=' flex flex-row items-center justify-start w-full'>
        <img className=' w-10 h-10 mr-2' src={img} alt="" />
        <div className=' flex flex-col items-start justify-start'>
          <h2 className=' text-sm text-white'>{name}</h2>
          <p className=' text-xs text-slate-400'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard