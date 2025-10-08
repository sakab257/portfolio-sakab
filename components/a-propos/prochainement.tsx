import React from 'react'
import Card from '../ui/card'
import Image from 'next/image'

const Prochainement = () => {
  return (
    <Card>
        {/* <Image src="/vfx/Background.png" alt="Background" width={300} height={170} className='absolute top-0 left-0'/> */}
        <div className='w-full h-full px-4 py-6'>
          <h2 className='text-xl font-bold'>En cours de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">développement</span> d'une application...</h2>
          <h3 className='font-light tracking-[0.3rem] text-xs mt-2'>PROCHAINEMENT</h3>
          <Image src="/vfx/developpement.svg" alt="Passion" width={170} height={100} className='absolute bottom-0 right-0 opacity-60' />
        </div>
    </Card>
  )
}

export default Prochainement