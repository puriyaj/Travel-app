'use client'
import Image from 'next/image'
import React from 'react'
import {useScroll,useTransform,motion} from 'framer-motion'
import { useRef } from "react";
const Guide = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({target:targetRef , offset:['start end','end start']})
  const opacity = useTransform(scrollYProgress, [1, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1 ])
  return (
    <motion.section style={{opacity,scale}}
    ref={targetRef} className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Your Path</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Navigate seamlessly with the WanderVista app, ensuring you never lose your way even in the remotest locations. Our support for offline maps guarantees you stay on course, even when the internet is out of reach. Rally your friends and family for exciting wilderness escapades, from traversing valleys to conquering mountain peaks.</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full ">
        <Image 
          src="/boat.png"
          alt="boat"
          width={1240}
          height={480}
          className="w-full object-cover object-center 2xl:rounded-5xl h-[800px]"
        />

        <motion.div 
         initial={{ rotate:'0deg' }}
         animate={{ rotate:'360deg' }}
         transition={{
           duration: 5,
           ease: 'backInOut',
           repeat : Infinity,
         }}
        className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">1 h 50 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Berlin</h4>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Guide