import React from 'react'
import Card from '../ui/card'
import Image from 'next/image'
import {CopyMail} from '../ui/button'

const Mail = () => {
  return (
    <div className='w-[300px] md:w-[400px] xl:w-[807px] h-[200px] md:h-[170px] xl:h-[200px] text-white rounded-xl p-[2px] bg-gradient-to-r from-[#6971A2]/16 to-[#272A3C]/37 mx-auto overflow-hidden transition-all'>
      <div className='w-full h-full bg-[#07091F] overflow-hidden relative rounded-xl'>
        <div className='w-full h-full'>
            <Image src="/vfx/blob.png" alt="Background" width={300} height={200} className='pointer-events-none absolute left-0 bottom-0' />
            <h2 className='text-xl xl:text-4xl font-bold w-5/6 mx-auto text-center py-6'>Ou alors... vous <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">pouvez</span> le faire <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">vous-meme</span> !</h2>
            <div className='xl:h-full xl:w-full'>
                <CopyMail />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mail