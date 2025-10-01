import ProjectCard from '@/components/project/project-card'
import PageTitle from '@/components/ui/page-title'
import React from 'react'

const Projects = () => {
  return (
    <>
      <PageTitle title="Mes Projets" />
      <div className='w-full h-160 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-4 px-4'>
        <ProjectCard />
      </div>
    </>
  )
}

export default Projects