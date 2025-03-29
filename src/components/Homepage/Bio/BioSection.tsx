"use client";
import Image from 'next/image';
import {
    useScroll,
    motion,
    useTransform,
  } from 'framer-motion';
  // import { useInView } from 'react-intersection-observer';

const BioSection = () => {

  const { scrollY } = useScroll();
  // const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 100]);
  // const y3 = useTransform(scrollY, [0, 300], [0, 150]);
  
  // const [ref, inView, entry] = useInView({
  //   triggerOnce: false,
  //   threshold: 0.5,
  // });

  // const variants = {
  //   visible: { opacity: 1, scale: 1, y: 0 },
  //   hidden: { 
  //     opacity: 0, 
  //     scale: 0.65, 
  //     y: 50 },
  // };

  return (
    <div className="Bio-Section relative flex flex-col justify-center items-center h-auto w-full">
      <div className='flex flex-col gap-22 -z-10 w-full sm:w-[80%] items-center'>
        <motion.div 
          className="flex flex-col gap-2
          justify-center items-center w-[90%] h-full
          border-2 border-white py-8 sm:p-6 md:p-8"
          style={{ y: y2 }}>

              <motion.h2 className='text-center text-3xl sm:text-5xl px-2'>
                Am I the right artist for you?
              </motion.h2>

              <div className='Content-Container flex flex-col gap-2
              justify-center items-center w-full h-full'>

                <div className='Image-Container flex justify-center w-[90%]'>
                    <Image 
                        src='/Home-Page-Assets/Raven-Painting.webp'
                        alt='Raven cartoon caricature holding a paint brush'
                        width={300}
                        height={300}
                        className='scale-80'
                        style={{ width: 'auto', height: 'auto' }}
                        quality={50}
                    />
                </div>
                <div className='Text-Container flex justify-center w-[90%]
                p-4 border-2 border-white lg:w-[50%]'>
                    <p className='flex flex-col text-xs sm:text-sm text-center justify-center'>
                    I prioritize a comfortable, collaborative experience, from consultation to final result. I offer a judgment-free space with amenities like fidget toys and design check-ins. I schedule ample time for breaks and adjustments, ensuring you never feel rushed. <br/><br/>
                    My style leans towards illustrative fine line and stipple, particularly flora and fauna, and dark/horror. While I&#39;m proficient in traditional and blackwork, I&#39;m eager to explore neotraditional and color projects. I tend to focus quietly during sessions, but I&#39;m always open to conversation.
                    </p>
                </div>
              </div>

          </motion.div>

          <motion.div 
            className="flex flex-col gap-2
            justify-center items-center w-[90%] h-full
            border-2 border-white py-8 sm:p-6 md:p-8"
            style={{ y: y2 }}>

              <motion.h2 className='text-center text-3xl sm:text-5xl px-2 pb-4'>
                Am I the right artist for you?
              </motion.h2>

              <div className='Content-Container flex flex-col-reverse gap-2
              justify-center items-center w-full h-full'>

                  <div className='Image-Container flex justify-center w-[90%]'>
                      <Image 
                          src='/Home-Page-Assets/Raven-Exclaim.webp'
                          alt='Raven cartoon caricature exclaiming'
                          width={300}
                          height={300}
                          className='scale-80'
                          style={{ width: 'auto', height: 'auto' }}
                          quality={50}
                      />
                  </div>
                  <div className='Text-Container flex justify-center w-[90%] p-4 border-2 border-white
                  lg:w-[50%]'>
                    <p className='flex flex-col text-xs sm:text-sm text-center justify-center w-full'>
                        <span>
                          I was born and raised in Washington and have always been fascinated with nature and animals, I even have an extensive collection of books on wildlife that I reference for some of my work. I also love to travel and learn about different cultures - even living in a foreign country for roughly a year. I love hearing about people&#39;s experiences and stories, as well as sharing my own. <br/><br/>
                          I practice many different forms of media for visual art including photography, painting, drawing, digital art, and more. <br/><br/>
                          As someone who is a part of the <strong><span className='text-red-500'>L</span>
                          <span className=' text-amber-600'>G</span>
                          <span className=' text-yellow-500'>B</span>
                          <span className=' text-green-500'>T</span>
                          <span className=' text-blue-500'>Q</span>
                          <span className=' text-purple-500'>+</span></strong> community, is neurodivergent, and struggles with extreme anxiety and ADHD I understand that the tattoo community may not always feel the most welcoming to everyone - and I want to change that.
                        </span>
                    </p>
                  </div>
              </div>
          </motion.div>
      </div>
    </div>
  )
}

export default BioSection