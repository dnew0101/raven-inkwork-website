"use client"
/**
 * Art container
 * @returns a div container that holds two different display types of art; a carousel for mobile devices and a parallax for desktop devices.
 */
import Carousel from "../../Globals/Carousel";

const array = [
  '/Mushroom1.png',
  '/Mushroom2.png',
  '/stock_hero.jpg',
  '/Home-Page-Assets/Raven-Question.png',
];

const Art = () => {
  return (
    <div className="Art-Container h-[80vh] w-full flex flex-col justify-center items-center z-10">

      <h1 className='text-center mb-4'>Art</h1>

      <div className='Mobile-Carousel-Container flex sm:hidden'>
        <Carousel>{array}</Carousel>
      </div>

      <div className='Desktop-Parallax-Container hidden sm:flex'>

      </div>

    </div>
  )
}

export default Art;