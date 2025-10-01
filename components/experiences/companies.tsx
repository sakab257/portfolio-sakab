import React from 'react'
import Company from './company'

const Companies = () => {
  return (
    <>
        <Company title={`Hackathon Gen IA`} imageUrl='/companies/orange.svg' company='Orange - 2025' 
          description={`
            ✦ Intégration de GraphQL dans un environnement Drupal/Symfony avec MariaDB.
            \n✦ Développement d’interfaces Next.js performantes et évolutives garantissant une UX/UI responsive.
            \n✦ Configuration d’un environnement Docker conteneurisé assurant la stabilité et reproductibilité.
            \n✦ Automatisation et déploiement sur Vercel avec pipelines CI/CD GitHub Actions réduisant le temps de production.`}
        />
        <Company title={`Concepteur\n Développeur`} imageUrl='/companies/cdc.svg' company='Groupe Caisse Des Dépôts - 2025' 
          description={`
            ✦ Intégration de GraphQL dans un environnement Drupal/Symfony avec MariaDB.
            \n✦ Développement d’interfaces Next.js performantes et évolutives garantissant une UX/UI responsive.
            \n✦ Configuration d’un environnement Docker conteneurisé assurant la stabilité et reproductibilité.
            \n✦ Automatisation et déploiement sur Vercel avec pipelines CI/CD GitHub Actions réduisant le temps de production.`}
        />
        <Company title={`ADEM`} imageUrl='/companies/dauphine.svg' company='Dauphine - 2025' 
          description={`
            ✦ Intégration de GraphQL dans un environnement Drupal/Symfony avec MariaDB.
            \n✦ Développement d’interfaces Next.js performantes et évolutives garantissant une UX/UI responsive.
            \n✦ Configuration d’un environnement Docker conteneurisé assurant la stabilité et reproductibilité.
            \n✦ Automatisation et déploiement sur Vercel avec pipelines CI/CD GitHub Actions réduisant le temps de production.`}
        />
    </>
  )
}

export default Companies