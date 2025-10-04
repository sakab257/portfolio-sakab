import Image from 'next/image'
import React from 'react'

interface ButtonProps{
    imageUrl:string,
}

const CompanyCard = ({imageUrl}:ButtonProps) => {
  return (
    <div className='w-[55px] h-[55px] rounded-sm flex items-center justify-center p-[2px] mx-auto bg-gradient-to-r from-[#6971A2]/50 to-[#272A3C] relative'>
        <Image src={imageUrl} alt="Logo de l'entreprise" width={55} height={55} className='object-contain rounded-sm'/>
    </div>
  )
}

export default CompanyCard