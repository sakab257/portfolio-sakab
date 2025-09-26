import React from 'react'


const PageTitle = ({title}:{title:string}) => {
  return (
    <div className='w-full flex justify-center items-end h-20'>
        <div className='bg-[#E24430] text-[26px] mt-4 w-fit flex items-center justify-center px-8 py-2 border-2 border-black uppercase shadow-[4px_4px_0px_0px_#000] gap-4 text-black font-black'>{title}</div>
    </div>
  )
}

export default PageTitle