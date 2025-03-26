"use client";
import Image from 'next/image';
import {
    useScroll,
    motion,
    useTransform,
    useMotionValue,
  } from 'framer-motion';
  import { useInView } from 'react-intersection-observer';

type SectionsProps = {
    title: string;
    image: [];
    text: string;
}

const Sections = () => {

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
    <div className="Bio-Section relative flex flex-col justify-center items-center h-auto w-full">
      <div className='flex flex-col gap-8 -z-10 w-full sm:w-[80%] items-center'>
        <motion.div 
          className="flex flex-col gap-2
          justify-center items-center w-[90%] h-full
          border-2 border-white py-14 sm:p-10 md:p-14"
          style={{ y: y2 }}>

              <motion.h1 className='text-center mb-4'>
                Am I the right artist for you?
              </motion.h1>

              <div className='Content-Container flex flex-col sm:flex-row-reverse gap-2
              justify-center items-center w-full h-full'>

                <div className='Image-Container flex justify-center w-[90%] sm:w-[49%]'>
                    <Image 
                        src='/Home-Page-Assets/Raven-Painting.png'
                        alt='Raven cartoon caricature holding a paint brush'
                        width={300}
                        height={200}
                        
                    />
                </div>
                <div className='Text-Container flex justify-center w-[90%]
                sm:w-[49%] p-4 border-2 border-white'>
                    <p className='flex flex-col text-lg text-center justify-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Numquam nobis incidunt ipsam fugit, repudiandae cumque 
                        pariatur ipsa. Tempore assumenda non animi magni, obcaecati 
                        ab repellat rerum debitis, molestiae, blanditiis sapiente.
                    </p>
                </div>
              </div>

          </motion.div>

          <motion.div 
            className="flex flex-col gap-2
            justify-center items-center w-[90%] h-full
            border-2 border-white py-14 sm:p-10 md:p-14"
            style={{ y: y2 }}>

              <h1 className='text-center mb-4'>Get to know me!</h1>

              <div className='Content-Container flex flex-col-reverse sm:flex-row gap-2
              justify-center items-center w-full h-full'>

                  <div className='Image-Container flex justify-center w-[90%] sm:w-[49%]'>
                      <Image 
                          src='/Home-Page-Assets/Raven!.png'
                          alt='Raven cartoon caricature exclaiming'
                          width={300}
                          height={200}
                      />
                  </div>
                  <div className='Text-Container flex justify-center w-[90%] sm:w-[49%] p-4 border-2 border-white'>
                      <p className='flex flex-col text-lg text-center justify-center'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Numquam nobis incidunt ipsam fugit, repudiandae cumque 
                          pariatur ipsa. Tempore assumenda non animi magni, obcaecati 
                          ab repellat rerum debitis, molestiae, blanditiis sapiente.
                      </p>
                  </div>
              </div>
          </motion.div>
      </div>
    </div>
  )
}

export default Sections