import React from 'react'


const JobTitle = ({title}:{title:string}) => {
  return (
    <div className='bg-[#F18E78] text-xs w-25 flex items-center justify-center px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#000] gap-4 text-black font-bold text-center'>{title}</div>
  )
}

export default JobTitle