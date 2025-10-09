import Passion from '@/components/a-propos/passion'
import Prochainement from '@/components/a-propos/prochainement'
import TechStack from '@/components/a-propos/tech-stack'
import Contact from '@/components/a-propos/contact'
import Disponible from '@/components/a-propos/disponible'
import React from 'react'

const About = () => {
  return (
    <>
      <div className='w-full h-full grid grid-cols-1 xl:grid-cols-2 xl:w-[800px] gap-4 mx-auto place-items-center xl:grid-rows-3'>
        <TechStack />
        <Disponible />
        <Passion />
        <Prochainement />
        <Contact />
      </div>
    </>
  )
}

export default About