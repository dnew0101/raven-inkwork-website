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
    <div className="Art-Container h-auto w-full flex flex-col justify-center items-center z-10">
      <div className="w-[90%] sm:w-[70%] border-2 border-white px-10 py-14">
        <h1 className='text-center mb-8'>Featured Works</h1>

        <div className='Mobile-Carousel-Container relative flex 
        h-full justify-center items-center'>
          <EmblaCarousel slides={photoBucket}></EmblaCarousel>
        </div>
      </div>
    </div>
  )
}

export default Art;