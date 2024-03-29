'use client'
import Image from 'next/image'
import Button from './Button'
import {useScroll,useTransform,motion} from 'framer-motion'
import { useRef } from "react";
const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({target:targetRef , offset:['start end','end start']})
  const opacity = useTransform(scrollYProgress, [1, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1 ])
  return (
    <motion.section ref={targetRef} style={{opacity}} className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-pattern-2 bg-cover bg-top p-10 rounded-xl">
      <div className="hero-map " />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 p-10">
        
        <h1 className="bold-52 lg:bold-88">Nature</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        Embark on your individual journeys as we guide you towards the pure joy of witnessing the untainted beauty of nature. Allow us to accompany you on a global adventure, all within the convenience of a single app.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            389k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Download App" 
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>
      
      <div
      className="relative flex flex-1 items-start"
      
      >
        
        <motion.div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8" 
        initial={{ rotate:'0deg' }}
        animate={{ rotate:'360deg' }}
        transition={{
          duration: 5,
          ease: 'backInOut'
        }}
        >

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white hover:text-green-200">Geneva</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">103.25 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">1.340 km</p>
            </div>
          </div>
        </motion.div>
      
      </div>
      

    </motion.section>
  )
}

export default Hero