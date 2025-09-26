import Company from '@/components/experiences/company'
import PageTitle from '@/components/ui/page-title'
import React from 'react'

const Experiences = () => {
  return (
    <>
      <PageTitle title="Mes Experiences" />
      <div className='w-full h-160 relative flex flex-col gap-4 pt-4'>
        <div className='h-full w-0.5 border-2 border-black border-dashed absolute top-0 left-1/2 -translate-x-1/2'></div>
        <Company title={`Concepteur\n Développeur`} imageUrl='/companies/cdc.svg' company='Groupe Caisse Des Dépôts - 2025' 
          description={`
            ✦ Intégration de GraphQL dans un environnement Drupal/Symfony avec MariaDB.
            \n✦ Développement d’interfaces Next.js performantes et évolutives garantissant une UX/UI responsive.
            \n✦ Configuration d’un environnement Docker conteneurisé assurant la stabilité et reproductibilité.
            \n✦ Automatisation et déploiement sur Vercel avec pipelines CI/CD GitHub Actions réduisant le temps de production.`}
        />
        {/* <Company title="Software Engineer" imageUrl='/companies/dauphine.svg'/> */}
      </div>
    </>
    
  )
}

export default Experiences