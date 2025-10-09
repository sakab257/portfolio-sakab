import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {ArrowUpRight} from 'lucide-react'

interface ProjectCardProps {
    imageUrl?:string,
    title?:string,
    link?:string | null,
    description?:string,
    techno?:{name:string, url:string}[],
}

const ProjectCard = ({imageUrl, title, link, description, techno}:ProjectCardProps) => {
  return (
    <div className='w-[250px] h-[400px] rounded-xl p-[3px] bg-gradient-to-r from-[#6971A2]/16 to-[#272A3C] mx-auto'>
        <div className='rounded-xl w-full h-full bg-gradient-to-r from-[#06091F] to-[#161A31] flex flex-col text-md p-4 relative'>
            <Image src="/vfx/blob-haut.png" alt="blob" width={300} height={300} className='absolute top-0 right-0 rounded-xl' />
            <Image src="/vfx/blob-bas.png" alt="blob" width={300} height={300} className='absolute bottom-0 left-0 rounded-xl' />
            <div className='w-full h-[250px] rounded-xl bg-gradient-to-r from-[#6971A2]/16 to-[#272A3C] z-10 relative overflow-hidden'>
                <Image src={imageUrl || '/projets/test-project.svg'} alt="project" width={400} height={400}  className='absolute bottom-0'/>
            </div>
            <div className='w-full h-fit z-10 mt-2'>
                <div className='w-full flex justify-between items-center'>
                    <h2 className='text-xl font-bold'>{title}</h2>
                    <Link href={link || '/'} className='text-xs flex items-center gap-1 text-[#D4B7FF]'>Voir le projet <ArrowUpRight className='size-3'/></Link>
                </div>
                <p className='text-xs text-[#C1C2D3]'>{description}</p>
                <div className='w-full h-[50px] mt-2 flex items-center justify-center gap-2'>
                    {techno?.map((techno) => (
                        <div key={techno.name} className='w-[40px] h-[40px] bg-[#0B0E23] rounded-full flex justify-center items-center'>
                            <Image src={techno.url} alt={techno.name} width={50} height={50} className='p-2' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard