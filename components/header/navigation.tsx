import Link from 'next/link'
import React from 'react'
import { FolderOpen, SendHorizontal, Library, Info } from 'lucide-react'

const links = [
    { href:"#", label:"Experiences", icon: FolderOpen },
    { href:"#", label:"Projets", icon: Library },
    { href:"#", label:"A propos", icon: Info },
]

const Navigation = () => {
  return (
    <nav className='p-6'>
        <ul className='space-y-4'>
            {links.map((link) => (
                <li key={link.label}>
                    <Link href={link.href} className='text-black font-semibold hover:underline flex items-center gap-3'>
                        <link.icon size={30} />
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
        <Link href="#" className='bg-[#E24430] mt-4 w-fit flex items-center px-4 py-2 border-2 border-black uppercase shadow-[4px_4px_0px_0px_#000] gap-4 text-black font-black transition-all duration-150 active:translate-x-1 active:translate-y-1 active:shadow-none'>
            me contacter
            <SendHorizontal />
        </Link>
    </nav>
  )
}

export default Navigation