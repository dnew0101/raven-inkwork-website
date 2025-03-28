"use client"
/**
 * Art container
 * @returns a div container that holds two different display types of art; a carousel for mobile devices and a parallax for desktop devices.
 */
import EmblaCarousel from "../../Globals/Carousel/EmblaCarousel";

const featuredArt = [
  '/Fallback-Assets/Featured-Art/Featured_1.webp',
  '/Fallback-Assets/Featured-Art/Featured_2.webp',
  '/Fallback-Assets/Featured-Art/Featured_3.webp',
  '/Fallback-Assets/Featured-Art/Featured_4.webp',
  '/Fallback-Assets/Featured-Art/Featured_5.webp',
];

const Art = () => {
  return (
    <div className="Art-Container h-auto w-full flex flex-col justify-center items-center z-10">
      <div className="w-[90%] sm:w-[70%] border-2 border-white px-2 sm:px-10 py-4 flex flex-col h-full justify-center items-center">
        <h2 className='text-center text-3xl sm:text-5xl mb-8'>Featured Works</h2>

        <div className='Mobile-Carousel-Container relative flex flex-col h-full justify-center items-center 
        w-full sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]'>
          <EmblaCarousel slides={featuredArt}></EmblaCarousel>
        </div>
      </div>
    </div>
  )
}

export default Art;