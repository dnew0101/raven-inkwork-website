"use client";

import Image from 'next/image';
import {
  useScroll,
  motion,
  useTransform,
  useMotionValue,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '@/components/Globals/Button';

function HeroServer() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 100]);
  const y3 = useTransform(scrollY, [0, 300], [0, 150]);
  
  const [ref, inView, entry] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: { 
      opacity: 0, 
      scale: 0.65, 
      y: 50 },
  };



  return (
    <div className="relative flex flex-col items-center h-[100vh] w-full mt-40">
      <div className='-z-10 mb-24'>
        <motion.h1 
        className="flex flex-row gap-2 flex-wrap justify-center sm:border"
        style={{ y: y1 }}>
            <span className="pl-3">
              Welcome to
            </span>
            <span className="text-black border-black bg-white pr-3 pl-1">
              Raven Inkwork
            </span>
        </motion.h1>
        <motion.p 
        className="flex text-white text-lg mt-2 justify-center flex-wrap"
        style={{ y: y3 }}>
          Custom art, from <span className='mx-1.5'>tattoos</span> to <span className='mx-1.5'>game sprites!</span>
        </motion.p>
      </div>
        <motion.div 
          className='Hero-Nav relative z-10
          flex flex-col md:flex-row gap-4 mt-4 w-full justify-center items-center md:justify-around
          sm:w-4/5 lg:w-3/4'
          style={{ y: y1 }}>
              {/* <Image
                src="/MushroomL.png"
                alt="Mushroom Art"
                width={300}
                height={300}
                className='
                hidden
                sm:w-60 sm:h-60 sm:inline
                lg:w-80 lg:h-80'>
              </Image> */}

              <motion.div className='w-full flex justify-center'>
                <Button 
                  innerText='Get In Touch' 
                  route={'/contact'}
                  />
              </motion.div>

              <div className='w-full flex justify-center'>
                <Button
                  innerText='View Portfolio'
                  route={'/portfolio'}
                  />
              </div>

              {/* <Image
                src="/MushroomR.png"
                alt="Mushroom Art"
                width={300}
                height={300}
                className='
                hidden
                sm:w-60 sm:h-60 sm:inline
                lg:w-80 lg:h-80'>
              </Image> */}
        </motion.div>
    </div>
  )
}

export default HeroServer;