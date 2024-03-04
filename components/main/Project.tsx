import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Project = () => {
        
    const projectData = [
      { 
        src:'/images/EcomAdmin.png',
        href:'https://ecomadmin-maniprithvis-projects.vercel.app/',
        title:'Nextjs Ecommerce CMS admin dashboard',
        description:' completed a Full-stack E-commerce CMS Project using Next.js. Integrated MongoDB for storage and utilized Next.js for seamless  Frontend and Backend for efficient development.'
        
      },
      { 
        src:'/images/insta.png',
        href:'https://insta-2-0-chi.vercel.app/',
        title:'instagram 2.0',
        description:'A  complete  FullStack project implemented  a Dynamic and responsive forum platform. A user can Create and read Posts and like and dislike a complete Crud operation with Firebase  '
      },
      
      {
        src:'/images/Ecomerce.jpg',
        href:'https://github.com/Maniprithvi/Ecommerce.git',
        title:'Ecommerce -site',
        description:'a complete MERN stack modern Ecommerce app, with auth and user CRUD operation . users can shop and experience their shopping   '
      },


    ] 

  return (
   <div className="flex flex-col items-center justify-center py-20"     id='projects'>
<h1 className="font-semibold text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500
to-cyan-500 py-20"> My Projects</h1>
<div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">  
{projectData.map((project)=>(
  <ProjectCard key={project.title} href={project.href} title={project.title} src={project.src} description={project.description}/>
))}
</div>
   </div>
  )
}

export default Project