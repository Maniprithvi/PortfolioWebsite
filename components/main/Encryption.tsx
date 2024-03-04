"use client";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";


const Encryption = () => {
  return (
    <div className="flex flex-row relative gap-5 items-center justify-center min-h-screen w-full h-full" id="about-me">
      <div className="absolute  w-auto h-auto top-0 z-[5] mb-10">
        <motion.div
          variants={slideInFromTop}
          className=" mb-20 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
       
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            About {" "}
          </span>
       Me
        </motion.div>
      </div>

      <div className="w-[90%] mx-auto mt-20 flex flex-row mx-auto">
          <div className="w-[50%] relative hidden md:block">
            <Image src="/images/profilepic.jpg" objectFit="contain" layout="fill" alt=""/>
          </div>
          <div className=" w-[50%] ">
            <h3 className="mb-10 text-center font-bold ml-[20px] text-2xl hidden md:block text-gray-300 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-50">Web Developer &amp; Designer</h3>
            <p className="text-xl text-white text-wrap">
             A aspiring self-taught Web Developer as a fresher i may not consider my self as Master But committed to continuous learning and growth.
             <br/> Over the past six months, I have dedicated myself to independently mastering these technologies. <br/>
              This period of self-guided learning has equipped me with a solid skill set and a resilient work ethic,<br/>
               making me confident in my ability to contribute effectively.
            </p>
            <div className="flex flex-row gap-20">
              <div className="m-8 ">
                <ul style={{borderLeft:'solid white 2px '}}>
                  {/* <li className="text-white p-4 " > <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Birthday:</strong> 20-10-1</li> */}
                  {/* <li className="text-white p-4" > <strong className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">gitHub :</strong> </li> */}
                  <li className="text-white p-4" > <strong className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Phone:</strong>+91 7667227263</li>
                  <li className="text-white p-4" > <strong className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">City:</strong>Tirupur, Tamilnadu</li>
                </ul>
              </div>
              <div className=" m-8">
                <ul style={{borderLeft:'solid white 2px '}}>
                  {/* <li className="p-4"> <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Age:</strong> <span className="text-white ">78</span></li> */}
                  <li className="p-4 text-white"> <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Degree:</strong>Bsc</li>
                  <li className="p-4 text-white"> <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Email:</strong> 007maniprithvi@gmail.com</li>
                  {/* <li className="p-4"> <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Freelance:</strong> Available</li> */}
                </ul>
              </div>
            </div>
            <p className="text-white">
            I am excited about the prospect of contributing to your team{"'"}s success<br/>
             and welcome the opportunity to discuss how my passion for learning aligns with Your{"'"}s goals.
            </p>
          </div>
        </div>
    

      {/* <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        /> */}
      {/* </div> */}
    </div>
  );
};

export default Encryption;