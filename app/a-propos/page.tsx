import Passion from '@/components/a-propos/passion'
import Prochainement from '@/components/a-propos/prochainement'
import TechStack from '@/components/a-propos/tech-stack'
import Contact from '@/components/a-propos/contact'
import Card from '@/components/ui/card'
import React from 'react'

const About = () => {
  return (
    <>
      <div className='w-full h-full grid grid-cols-1 xl:grid-cols-2 gap-4 pb-8'>
        <TechStack />
        <Passion />
        <Prochainement />
        <Contact />       
      </div>
    </>
  )
}

export default About