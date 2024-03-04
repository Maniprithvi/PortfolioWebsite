"use client"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import {motion} from 'framer-motion'
import React from 'react'


const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
        <motion.div
        variants={slideInFromTop}
        className='welcom-box py-[8px] px-[7px] border flex border-[#7042f88b] opacity-[0.9] '
        >
       <SparklesIcon  className='text-[#b49bff] mr-[10px] h-5 w-5'/>
       <h1 className="welcome-text text-[17px] text-[#b49bff] ">
        This App build  with Next js 13
       </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)} className=' mt-10 mb-10 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
          Skill-Sets
        </motion.div>
        <motion.div
         variants={slideInFromRight(0.7)}
         className='cursive-text text-2xl text-gray-200 mb-10 mt-[10px] text-center'>
     A Enthusiastic and Aspiring Web Developer with proficients in below the technlogies... 
         </motion.div>
    </div>
  )
}

export default SkillText