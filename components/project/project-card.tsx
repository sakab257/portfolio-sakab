import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const projects = [
    { title : "Resumind", date: "2025", description:"Site Web", bg:"#F8CB46", imageBg:"#5294FF", link:"/" },
    { title : "Intellidraw", date: "2025", description:"Application", bg:"#FD9FDE", imageBg:"#06AF56", link: "/experiences" },
    { title : "Sortify", date: "2025", description:"Site Web", bg:"#F8CB46", imageBg:"#5294FF", link:"#" },
    { title : "Cinespark", date: "2025", description:"Site Web", bg:"#F8CB46", imageBg:"#5294FF", link:"#" },
]


const ProjectCard = () => {
  return (
    <>
        {projects.map((project)=>(
            <div key={project.title} className='w-80 h-60 flex flex-col relative border-3 overflow-hidden border-black shadow-[4px_4px_0px_0px_#000] mx-auto' style={{backgroundColor: project.bg}}>
                <div className='w-full flex justify-between px-4 pt-4'>
                    <h1 className='font-black uppercase text-xl'>{project.title}</h1>
                    <p className='font-black uppercase text-xl'>{project.date}</p>
                </div>
                <p className='text-xs capitalize px-4'>{project.description}</p>
                <svg width="180" height="180" viewBox="0 0 152 138" className='absolute left-0 -bottom-2' fill={project.imageBg}>
                    <path d="M73.3389 31.2539L73.8408 32.1504L74.7236 31.625L103.476 14.501L103.022 47.9639L103.009 48.9912L104.036 48.9775L137.498 48.5234L120.375 77.2764L119.85 78.1592L120.746 78.6611L149.951 95L120.746 111.339L119.85 111.841L120.375 112.724L137.498 141.476L104.036 141.022L103.009 141.009L103.022 142.036L103.476 175.498L74.7236 158.375L73.8408 157.85L73.3389 158.746L57 187.951L40.6611 158.746L40.1592 157.85L39.2764 158.375L10.5234 175.498L10.9775 142.036L10.9912 141.009L9.96387 141.022L-23.499 141.476L-6.375 112.724L-5.84961 111.841L-6.74609 111.339L-35.9521 95L-6.74609 78.6611L-5.84961 78.1592L-6.375 77.2764L-23.499 48.5234L9.96387 48.9775L10.9912 48.9912L10.9775 47.9639L10.5234 14.501L39.2764 31.625L40.1592 32.1504L40.6611 31.2539L57 2.04785L73.3389 31.2539Z" stroke="black" strokeWidth="2"/>
                </svg>
                <Link href={project.link} className='underline absolute bottom-4 right-4'>Voir le projet +</Link>
            </div>
        ))}
    </>
  )
}

export default ProjectCard