import React from 'react'

const Button = ({styles, text}) => {
  return (
    <button className={`${styles} py-4 px-6 outline-none font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] `}>{text}</button>
  )
}

export default Button