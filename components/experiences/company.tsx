import Image from 'next/image'
import React from 'react'
import JobTitle from './job-title'
import {Pointer} from 'lucide-react'
import JobDescription from './job-description'

interface CompanyProps {
    title?: string,
    imageUrl?: string
    description?: string,
    company?: string,
}

const Company = ({title, imageUrl, company, description}:CompanyProps) => {
  return (
    <div className={`h-50 w-full flex items-center justify-center gap-32`}>
        <div className='h-full flex flex-col items-center justify-center gap-4'>
            <JobTitle title={`${title}`} />
            <div className='w-25 h-25 p-4 border-2 border-black shadow-[4px_4px_0px_0px_#000] flex items-center justify-center relative'>
                <Image src={`${imageUrl}`} alt="Company Logo" fill className='object-contain' />
            </div>
        </div>
        <div className='size-5 bg-black rotate-45 absolute left-1/2 -translate-x-1/2'></div>
        <JobDescription title={`${title}`} company={company} description={description}/>
        
    </div>
  )
}

export default Company