import Link from 'next/link'
import React from 'react'

const links = [
    {href:"/",label:"accueil"},
    {href:"/a-propos",label:"à propos"},
    {href:"/projets",label:"projets"},
    {href:"/experiences",label:"expériences"},
    {href:"/contact",label:"contact"},
]

const Navbar = () => {
  return (
    <div className='mt-6 transition-all text-[10px] md:text-sm xl:text-md w-[300px] md:w-[400px] xl:w-[500px] h-[45px] md:h-[50px] xl:h-[55px] rounded-sm flex items-center justify-center mx-auto p-[2px] bg-gradient-to-r from-[#6971A2]/16 to-[#272A3C]/37 z-10 mb-10'>
        <ul className='flex items-center justify-center xl:justify-evenly w-full gap-4 h-full bg-[#0B0D22] text-[#C1C2D3] rounded-sm transition-all'>
            {links.map((link) => (
                <li key={link.label}><Link href={link.href} className='capitalize cursor-pointer hover:text-white transition-all'>{link.label}</Link></li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar