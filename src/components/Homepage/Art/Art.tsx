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
      <div className="w-[90%] sm:w-[70%] border-2 border-white px-10 py-14">
        <h1 className='text-center mb-8'>Featured Works</h1>

        <div className='Mobile-Carousel-Container relative flex 
        h-full justify-center items-center'>
          <EmblaCarousel slides={featuredArt}></EmblaCarousel>
        </div>
      </div>
    </div>
  )
}

export default Art;