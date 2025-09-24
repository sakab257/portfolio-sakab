import Image from 'next/image'
import React from 'react'

const companies = [
    {image: "/companies/cdc.svg", name: "CDC"},
    {image: "/companies/dauphine.svg", name: "Dauphine"},
    {image: "/companies/cdc.svg", name: "test"},
    {image: "/companies/dauphine.svg", name: "djjs"},
]

const CompanyCards = () => {
  return (
    <>
      {companies.map((company) => (
        <div key={company.name} className='w-20 h-20 p-4 border-2 border-black shadow-[4px_4px_0px_0px_#000] flex items-center justify-center relative'>
          <Image src={company.image} alt={company.name} fill className='object-contain'/>
        </div>
      ))}
    </>
  )
}

export default CompanyCards