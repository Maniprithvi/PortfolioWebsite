"use client"

import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface Props{
    src:string;
    width:number;
    height:number;
    index:number

}

const SkillDataProvider = ({src,width,height,index
}:Props) => {
    const{ref,inView} = useInView({
        triggerOnce:true  
    })

    const imageVariants={
        hidden:{opacity:0},
        visible:{opacity:1}
    }

    const animationDelay =0.8
  return (
 <motion.div
 ref={ref}
 initial='hidden'
 variants={imageVariants}
 animate={inView? "visible":'hidden'}
 custom={index}
 className='m-4'
 transition={{delay:index*animationDelay}}
 >
<Image 
src={src}
width={width}
height={height}
alt='skill images'
/>
 </motion.div>
  )
}

export default SkillDataProvider