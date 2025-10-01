import Companies from '@/components/experiences/companies'
import Company from '@/components/experiences/company'
import PageTitle from '@/components/ui/page-title'
import React from 'react'

const Experiences = () => {
  return (
    <>
      <PageTitle title="Mes Experiences" />
      <div className='w-full h-160 relative flex flex-col gap-4 pt-4'>
        <div className='h-full w-0.5 border-2 border-black border-dashed absolute top-0 left-1/2 -translate-x-1/2'></div>
        <Companies />
        {/* <Company title="Software Engineer" imageUrl='/companies/dauphine.svg'/> */}
      </div>
    </>
    
  )
}

export default Experiences