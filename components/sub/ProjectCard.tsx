import Image from 'next/image';
import React from 'react'
import  Link from 'next/link'

interface Props{
    src:string;
    title : string;
    description:string,
    href:string 
}

const ProjectCard = ({src,title,description,href}:Props) => {
  
   const handleLinkClick = (href:string) => {
    window.open(href, '_blank');
  };
  return (
    <Link  href={href} >
    <div  className='h-[75%] w-[500px] relative overflow-hidden rounded-md shadow-lg border border-[#2A0E61]'>
      <Image 
      src={src}
      alt={title}
      width={200}
      height={200}
      className='w-full object-contain'
      />
      <div className="relative p-4">
        <h1 className="semi-bold text-2xl text-white">{title}</h1>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
      </div>
      </Link>
  )
}

export default ProjectCard