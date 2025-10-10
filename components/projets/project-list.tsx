import React from 'react'
import ProjectCard from './project-card'

const ProjectList = () => {
  return (
    <>
        <ProjectCard title='IntelliDraw' link='https://github.com/sakab257/digit-recognizer' description='
          IntelliDraw permet de dessiner des chiffres à la main et d&apos;obtenir une prédiction grâce à un modèle de deep learning entraîné sur le dataset MNIST.
          ' imageUrl='/projets/test-project.svg' techno={[
            {name:"React",url:"/projets/React.svg"},
            {name:"React1",url:"/projets/React.svg"},
            {name:"React2",url:"/projets/React.svg"},
            {name:"React3",url:"/projets/React.svg"}]}
          />
          <ProjectCard title='Sortify' link='https://sortify-sakab.vercel.app/' description='
          Sortify permet aux utilisateurs de visualiser, comparer et comprendre les algorithmes de tri avec une interface interactive et moderne.
          ' imageUrl='/projets/test-project.svg' techno={[
            {name:"React",url:"/projets/React.svg"},
            {name:"React1",url:"/projets/React.svg"},
            {name:"React2",url:"/projets/React.svg"},
            {name:"React3",url:"/projets/React.svg"}]}
          />
          <ProjectCard title='Resumind' link='https://resumind-sakab.vercel.app/' description='
          Resumind permet d&apos;analyser, noter et améliorer votre CV grâce à l&poas;IA pour maximiser vos chances auprès des recruteurs.
          ' imageUrl='/projets/test-project.svg' techno={[
            {name:"React",url:"/projets/React.svg"},
            {name:"React1",url:"/projets/React.svg"},
            {name:"React2",url:"/projets/React.svg"},
            {name:"React3",url:"/projets/React.svg"}]}
          />
          <ProjectCard title='Cinespark' link='https://cinespark-sakab.vercel.app/' description='
          CineSpark permet aux utilisateurs de rechercher, découvrir et sauvegarder leurs films préférés avec une interface élégante et responsive.
          ' imageUrl='/projets/test-project.svg' techno={[
            {name:"React",url:"/projets/React.svg"},
            {name:"React1",url:"/projets/React.svg"},
            {name:"React2",url:"/projets/React.svg"},
            {name:"React3",url:"/projets/React.svg"}]}
          />
          <ProjectCard title='HD News' link='https://honeydropnews.vercel.app/' description='
          Honey Drop News permet de partager les actualités de l&apos;équipe Honey Drop avec humour, bugs épiques et victoires codées en mode café++.
          ' imageUrl='/projets/test-project.svg' techno={[
            {name:"React",url:"/projets/React.svg"},
            {name:"React1",url:"/projets/React.svg"},
            {name:"React2",url:"/projets/React.svg"},
            {name:"React3",url:"/projets/React.svg"}]}
          />
          <ProjectCard title='ADEM' link='/' description='
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore
          ' imageUrl='/projets/test-project.svg' techno={[
            {name:"React",url:"/projets/React.svg"},
            {name:"React1",url:"/projets/React.svg"},
            {name:"React2",url:"/projets/React.svg"},
            {name:"React3",url:"/projets/React.svg"}]}
          />
          <ProjectCard title='Java E-com' link='/' description='
           permet aux grimpeurs de parcourir, sélectionner et acheter tout l&pos;équipement d&pos;escalade avec un système de paiement fluide.
          ' imageUrl='/projets/test-project.svg' techno={[
            {name:"React",url:"/projets/React.svg"},
            {name:"React1",url:"/projets/React.svg"},
            {name:"React2",url:"/projets/React.svg"},
            {name:"React3",url:"/projets/React.svg"}]}
          />
          <ProjectCard title='PlagiC' link='/' description='
          PlagiC permet d&apos;analyser, comparer et mesurer la similarité entre fichiers C avec des algorithmes de détection performants.
          ' imageUrl='/projets/test-project.svg' techno={[
            {name:"React",url:"/projets/React.svg"},
            {name:"React1",url:"/projets/React.svg"},
            {name:"React2",url:"/projets/React.svg"},
            {name:"React3",url:"/projets/React.svg"}]}
          />
    </>
  )
}

export default ProjectList