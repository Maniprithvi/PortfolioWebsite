"use client";

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromTop,slideInFromRight,slideInFromLeft } from '@/utils/motion'
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from 'next/image'


const HeroContet = () => {

  return (
<motion.div  initial='hidden'
animate='visible'
className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
>
<div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
   
    <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            A self-taught Wed Developer
          </h1>
        
    </motion.div>
    <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            I'm a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              MERN{" "}
            </span>
            Stack Developer
          </span>
        </motion.div>
      <motion.p variants={slideInFromLeft(0.9)}
      className='text-white text-2xl leading-10'>
      This is <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>Manikandan Siva</span>, <br />
       with the goal of advancing my career and participating in inspiring projects.
      Here, I showcase my work and my passion for web development. Let&apos;s shape digital solutions together and pave the way for the future!
      </motion.p> 
      {/* get my resume */}
       <motion.a
       variants={slideInFromLeft(1.3)}
       href='https://docs.google.com/document/d/1sGZ-lx-jDRARdamUAeHGAfZGgfzzijLGJ0IwMl2jk48/edit?usp=drive_link'
       download="ManikandanResume.pdf"
       className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
       >get my resume !</motion.a>

     
</div>
<motion.div variants={slideInFromRight(0.8)}
      className='w-full h-full flex justify-center items-center'>
        <Image 
        src='/mainIconsdark.svg'
        width={650}
        height={650}
      alt={'work icons'}/>
        </motion.div>
    </motion.div>
  )
}

export default HeroContet