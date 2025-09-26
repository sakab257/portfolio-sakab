"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Navigation from './navigation'
import Link from 'next/link'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    


return (
    <>
        <div className='w-full h-[60px] bg-[#E24430] border-black border-b-6 box-border relative flex items-center justify-center'>
            <Link href="/"><h1 className='font-black text-2xl'>SAKAB</h1></Link>
            <div className='absolute top-0 left-0 w-16 h-full cursor-pointer flex items-center justify-center' onClick={() => setIsOpen(!isOpen)}>
                <Image src={isOpen ? '/icons/close.svg' : '/icons/open.svg'} alt="button" width={24} height={24} />
            </div>
        </div>
        {/* Navigation sidebar */}
        <div className={`fixed top-[60px] left-0 h-[calc(100vh-60px)] bg-[#F18D78] border-r-6 border-black transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-[90%] md:w-[50%] xl:w-[30%]`}>
            <Navigation />
        </div>
    </>
)
}

export default Header