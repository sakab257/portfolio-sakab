import Image from 'next/image'
import React from 'react'

const companies = [
    {image: "/companies/cdc.svg", name: "CDC"},
    {image: "/companies/dauphine.svg", name: "Dauphine"},
    {image: "/companies/orange.svg", name: "Orange"},
    
]

const CompanyCards = () => {
  return (
    <>
      {companies.map((company) => (
        <div key={company.name} className='w-15 h-15 md:w-20 md:h-20 lg:h-24.5 lg:w-24.5 p-4 border-2 border-black shadow-[4px_4px_0px_0px_#000] flex items-center justify-center relative'>
          <Image src={company.image} alt={company.name} fill className='object-contain'/>
        </div>
      ))}
    </>
  )
}

export default CompanyCards