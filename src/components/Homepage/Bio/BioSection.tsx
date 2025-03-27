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

              <motion.h1 className='text-center mb-4'>
                Am I the right artist for you?
              </motion.h1>

              <div className='Content-Container flex flex-col gap-2
              justify-center items-center w-full h-full'>

                <div className='Image-Container flex justify-center w-[90%]'>
                    <Image 
                        src='/assets/Home-Page-Assets/Raven-Painting.png'
                        alt='Raven cartoon caricature holding a paint brush'
                        width={300}
                        height={200}
                        
                    />
                </div>
                <div className='Text-Container flex justify-center w-[90%]
                p-4 border-2 border-white'>
                    <p className='flex flex-col text-xs text-center justify-center'>
                    I take my time with every client that comes to me - from the consultation process to the actual appointment. I want to ensure that you always feel informed, involved, and of course that you are comfortable throughout the experience and with the end result. I am always trying to provide a safe space for everybody; I offer a judgement free zone, fidget toys to mess with, and more. I also offer design check in appointments for anyone who may be anxious about the final design and uncomfortable with waiting until the day of. No matter what I always make sure there is plenty of time within my schedule for design changes and plenty of breaks; so you never feel rushed or pressured. <br/> <br/>

                    I tend to be a bit more quiet during a session, as I zone into my work, so you are more than welcome to pop in some headphones and hang out. But I’m always open to talking too, especially if that helps to distract from the tattooing. <br/> <br/>

                    I love to do illustrative designs with fine lines and stipple shading - specifically flora and fauna subject matter. I also love to do dark/horror work, although most of my clients get the previously mentioned style. I am extremely comfortable with traditional and blackwork, however, I would absolutely love to work on more neotraditional and color projects!
                    </p>
                </div>
              </div>

          </motion.div>

          <motion.div 
            className="flex flex-col gap-2
            justify-center items-center w-[90%] h-full
            border-2 border-white py-8 sm:p-6 md:p-8"
            style={{ y: y2 }}>

              <h1 className='text-center mb-4'>Get to know me!</h1>

              <div className='Content-Container flex flex-col-reverse gap-2
              justify-center items-center w-full h-full'>

                  <div className='Image-Container flex justify-center w-[90%]'>
                      <Image 
                          src='/assets/Home-Page-Assets/Raven!.png'
                          alt='Raven cartoon caricature exclaiming'
                          width={300}
                          height={200}
                      />
                  </div>
                  <div className='Text-Container flex justify-center w-[90%] p-4 border-2 border-white'>
                      <p className='flex flex-col text-xs text-center justify-center'>
                        I was born and raised in Washington and have alway been fascinated with nature and animals, I even have an extensive collection of books on wildlife that I reference for some of my work. I also love to travel and learn about different cultures - even living in a foreign country for roughly a year. I love hearing about people’s experiences and stories, as well as sharing my own. <br/><br/>

                        I practice many different forms of media for visual art including photography, painting, drawing, digital art, and more. <br/><br/>

                        As someone who is a part of the LGBTQ+ community, is neurodivergent, and struggles with extreme anxiety and ADHD I understand that the tattoo community may not always feel the most welcoming to everyone - and I want to change that.
                      </p>
                  </div>
              </div>
          </motion.div>
      </div>
    </div>
  )
}

export default BioSection