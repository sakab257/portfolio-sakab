import React from 'react'
import Image from 'next/image'

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-[300px] h-[170px] text-white rounded-xl p-[2px] bg-gradient-to-r from-[#6971A2]/16 to-[#272A3C]/37 mx-auto overflow-hidden'>
      <div className='w-full h-full bg-[#07091F] overflow-hidden relative'>
        <Image src="/vfx/Background.png" alt="Background" width={300} height={170} className='absolute top-0 left-0'/>
        <Image src="/vfx/Background.png" alt="Background" width={300} height={170} className='absolute top-0 left-0'/>
        {children}
      </div>
    </div>
  )
}

export default Card