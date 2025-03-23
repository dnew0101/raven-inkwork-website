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

const BioSection = () => {

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
    <div className="Bio-Section relative flex flex-col justify-center items-center h-[100vh] w-full">
      <div className='-z-10'>
        <motion.div 
        className="flex flex-col-reverse sm:flex-row gap-2 justify-center items-center w-full h-full"
        style={{ y: y1 }}>
            <div className='Image-Container flex justify-center w-[90%] sm:w-[49%]'>
                <Image 
                    src='/MushroomR.png'
                    alt='Mushroom'
                    width={300}
                    height={200}
                />
            </div>
            <div className='Text-Container flex justify-center w-[90%] sm:w-[49%]'>
                <p className='flex flex-col text-lg text-center justify-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Numquam nobis incidunt ipsam fugit, repudiandae cumque 
                    pariatur ipsa. Tempore assumenda non animi magni, obcaecati 
                    ab repellat rerum debitis, molestiae, blanditiis sapiente.
                </p>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default BioSection