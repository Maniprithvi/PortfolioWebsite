import React from 'react'
import {motion} from 'framer-motion'


import { Backend_skill,
Frontend_skill,
Full_stack,
// Other_skill,
Skill_data } from '@/constants'

import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'


const Skills = () => {
  return (
   <section id='skills'
   style={{transform:'scale(0.9)'}}
   className='flex flex-col items-center justify-center gap-10 h-full  relative overlow-hidden pb-40 py-20'>
    <SkillText />
    <>
    <div className='mb-10 text-center font-bold ml-[20px] text-2xl hidden md:block text-gray-300 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-50'>
       Front-End Technlogies  
       <span className='text-white text-xl'> </span>
      </div>
    
    <div  className='flex flex-row justify-around flex-wrap mt-4 gap5 items-center'>
         
      {Skill_data.map((img,i)=>(
        <SkillDataProvider 
        key={i}
        src={img.Image}
        width={img.width}
        height={img.height}
        index={i}
        />
      ))}

    </div>
    </>
    <>
     <div className='mb-10 text-center font-bold ml-[20px] text-2xl hidden md:block text-gray-300 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-50'>
       Back-End Technlogies  
      </div>
    <div  className='flex flex-row justify-around flex-wrap mt-4 gap5 items-center'>
     
      {Backend_skill.map((img,i)=>(
        <SkillDataProvider 
        key={i}
        src={img.Image}
        width={img.width}
        height={img.height}
        index={i}
        />
      ))}

    </div>
    </>

   </section>
  )
}

export default Skills