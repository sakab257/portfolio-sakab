'use client'

import Link from 'next/link'
import React, { useRef, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const links = [
    {href:"/",label:"accueil"},
    {href:"/a-propos",label:"à propos"},
    {href:"/projets",label:"projets"},
    {href:"/experiences",label:"expériences"},
    {href:"/contact",label:"contact"},
]

const Navbar = () => {
  const pathname = usePathname()
  const activeIndex = links.findIndex(link => link.href === pathname)
  const linkRefs = useRef<(HTMLLIElement | null)[]>([])
  const [indicatorPosition, setIndicatorPosition] = useState({ left: 0, opacity: 0 })

  useEffect(() => {
    if (activeIndex !== -1 && linkRefs.current[activeIndex]) {
      const activeLink = linkRefs.current[activeIndex]
      if (activeLink) {
        const { offsetLeft, offsetWidth } = activeLink
        setIndicatorPosition({
          left: offsetLeft + offsetWidth / 2,
          opacity: 1
        })
      }
    }
  }, [activeIndex])

  return (
    <div className='mt-6 transition-all text-[10px] md:text-sm xl:text-md w-[300px] md:w-[400px] xl:w-[500px] h-[45px] md:h-[50px] xl:h-[55px] rounded-sm flex items-center justify-center mx-auto p-[2px] bg-gradient-to-r from-[#6971A2]/16 to-[#272A3C]/37 z-10 mb-10'>
        <ul className='flex items-center justify-center xl:justify-evenly w-full gap-4 h-full bg-[#0B0D22] text-[#C1C2D3] rounded-sm transition-all relative'>
            <div
                className='w-2 h-2 bg-white absolute rounded-full bottom-0 transition-all duration-500 ease-in-out'
                style={{
                    left: `${indicatorPosition.left}px`,
                    transform: 'translateX(-50%)',
                    opacity: indicatorPosition.opacity
                }}
            />
            {links.map((link, index) => (
                <li key={link.label} ref={(el) => { linkRefs.current[index] = el }}>
                    <Link
                        href={link.href}
                        className={`capitalize cursor-pointer hover:text-white transition-all ${
                            pathname === link.href ? 'text-white' : ''
                        }`}
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar