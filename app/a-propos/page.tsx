import Passion from '@/components/a-propos/passion'
import TechStack from '@/components/a-propos/tech-stack'
import Card from '@/components/ui/card'
import React from 'react'

const About = () => {
  return (
    <>
      <div className='w-full h-full grid grid-cols-1 xl:grid-cols-2 gap-4 pb-8'>
        <TechStack />
        <Passion />
        <Card>d</Card>
        <Card>d</Card>
        
      </div>
    </>
  )
}

export default About