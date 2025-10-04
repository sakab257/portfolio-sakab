import Link from 'next/link'
import React from 'react'

const links = [
    {href:"/a-propos",label:"à propos"},
    {href:"#",label:"projets"},
    {href:"#",label:"expériences"},
    {href:"#",label:"contact"},
]

const Navbar = () => {
  return (
    <div className='w-[350px] h-[45px] rounded-sm flex items-center justify-center mx-auto p-[2px] bg-gradient-to-r from-[#6971A2]/16 to-[#272A3C]/37 z-10 mb-10'>
        <ul className='flex items-center justify-center w-full gap-4 h-full bg-[#0B0D22] text-[#C1C2D3] rounded-sm text-sm'>
            {links.map((link) => (
                <li key={link.label}><Link href={link.href} className='capitalize cursor-pointer hover:text-white transition-all'>{link.label}</Link></li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar