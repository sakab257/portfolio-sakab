import React from 'react'
import Card from '../ui/card'
import Image from 'next/image'
import {CopyMail} from '../ui/button'

const Contact = () => {
  return (
    <Card>
        <div className='w-full h-full'>
            <Image src="/vfx/blob.png" alt="Background" width={300} height={170} className='pointer-events-none absolute left-0' />
            <h2 className='text-xl font-bold w-5/6 mx-auto text-center py-6'>Créons quelque chose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">ensemble</span> !</h2>
            <CopyMail />
        </div>
    </Card>
  )
}

export default Contact