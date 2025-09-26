import Link from 'next/link'
import React from 'react'
import { FolderOpen, SendHorizontal, Library, Info } from 'lucide-react'
import ButtonStyled from '../ui/button-styled'

const links = [
    { href:"/experiences", label:"Experiences", icon: FolderOpen },
    { href:"/project", label:"Projets", icon: Library },
    { href:"/info", label:"A propos", icon: Info },
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
        <ButtonStyled
            color="#E24430"
            text="me contacter"
            icon={<SendHorizontal />}
            href="/contact"
        />
    </nav>
  )
}

export default Navigation