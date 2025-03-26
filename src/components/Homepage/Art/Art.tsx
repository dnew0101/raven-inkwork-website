"use client"
/**
 * Art container
 * @returns a div container that holds two different display types of art; a carousel for mobile devices and a parallax for desktop devices.
 */
import EmblaCarousel from "../../Globals/Carousel/EmblaCarousel";

const photoBucket = [
  '/backgroundEdgy.jpg',
  '/backgroundNightSky.jpg',
  '/stock_hero.jpg',
  '/Home-Page-Assets/Raven-Question.png',
];

const Art = () => {
  return (
    <div className="Art-Container h-[90vh] w-full flex flex-col justify-center items-center z-10 mb-10">

      <h1 className='text-center mb-4'>Art</h1>

      <div className='Mobile-Carousel-Container relative flex 
      w-[90%] sm:w-[70%] md:w-[65%] lg:w-[60%] xl:w-[55%] 
      h-auto justify-center items-center'>
        <EmblaCarousel slides={photoBucket}></EmblaCarousel>
      </div>

    </div>
  )
}

export default Art;