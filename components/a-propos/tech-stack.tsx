import React from 'react'
import Card from '../ui/card'
import Image from 'next/image'

const techLeft = ["Python","NextJS","PHP","Drupal"]
const techRight = ["SQL","Java","Docker","CI / CD"]

const MiniCardLeft = () => {
    return (
        techLeft.map((tech)=>(
            <div key={tech} className='w-[65px] h-[40px] bg-[#10132E] rounded-sm grid place-items-center text-[9px] font-semibold'>{tech}</div>
        ))
    )
}

const MiniCardRight = () => {
    return (
        techRight.map((tech)=>(
            <div key={tech} className='w-[65px] h-[40px] bg-[#10132E] rounded-sm grid place-items-center text-[9px] font-semibold'>{tech}</div>
        ))
    )
}

const TechStack = () => {
  return (
    <Card>
        {/* <Image src="/vfx/Background.png" alt="Background" width={300} height={170} className='absolute top-0 left-0'/> */}
        <div className='w-full h-full grid grid-cols-2 pl-4 pr-2'>
            <div className='w-full h-full flex flex-col justify-center'>
                <p className='text-[10px]'>En amélioration continue de</p>
                <h2 className='text-3xl font-black'>Ma Stack</h2>
            </div>
            <div className='w-full h-full grid grid-cols-2 gap-1'>
                <div className='w-full h-full flex flex-col gap-1 relative bottom-1'>
                    <MiniCardLeft />
                </div>
                <div className='w-full h-full flex flex-col gap-1'>
                    <MiniCardRight />
                </div>
            </div>
        </div>
    </Card>
  )
}

export default TechStack