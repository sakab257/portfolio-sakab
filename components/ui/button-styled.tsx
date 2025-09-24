import React, { ReactNode } from 'react'
import Link from 'next/link'

interface ButtonStyledProps {
  color?: string
  text?: string
  icon?: ReactNode
  href?: string
  px?: string
}

const ButtonStyled = ({color, text, icon, href = "#", px = "px-8"}: ButtonStyledProps) => {
  return (
    <Link href={href} className={`bg-[${color}] text-md lg:text-xl mt-4 w-fit flex items-center justify-center ${px} py-2 border-2 border-black uppercase shadow-[4px_4px_0px_0px_#000] gap-4 text-black font-black transition-all duration-150 active:translate-x-1 active:translate-y-1 active:shadow-none`}>
        {text}
        {icon && icon}
    </Link>
  )
}

export default ButtonStyled