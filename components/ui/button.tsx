import React from 'react'

interface ButtonProps{
    label:string,
    icon?:React.ReactNode,
}

const Button = ({label,icon}:ButtonProps) => {
  return (
    <div className='w-[300px] md:w-[400px] xl:w-[500px] h-[45px] md:h-[50px] xl:h-[55px] rounded-sm flex items-center justify-center mx-auto p-[2px] bg-gradient-to-r from-[#6971A2]/16 to-[#272A3C]/37'>
        <div className='w-full h-full bg-gradient-to-r from-[#06091F] to-[#161A31] flex gap-2 items-center justify-center text-md md:text-lg'>{label} {icon}</div>
    </div>
  )
}

export default Button