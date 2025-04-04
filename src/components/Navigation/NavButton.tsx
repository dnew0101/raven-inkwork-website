/**
 * Custom toggle button for the navigation bar.
 * Modeled after https://atelier.net/virtual-economy/ nav button.
 * 
 * CLIENT-SIDE COMPONENT
 */
"use client"
import { useState } from 'react'

type NavButtonProps = {
  getClicked: boolean,
  setClicked: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * @param getClicked and @param setClicked are passed from the parent component's useState hook.
 * 
 * @returns a button component that has a shared click event with the parent component/other nav items.
 */
function NavButton({ getClicked, setClicked }: NavButtonProps) {
  const [getHovered, setHovered] = useState(false)

  {/*
    handleClick writes parent component's state; able to be read by other child components.
    handleMouseOver and handleMouseOut are for hover effects on *exclusively* this component's state.
  */}
  const handleClick = () => {
    setClicked(!getClicked)
    console.log("Clicked")
  }

  const handleMouseOver = () => {
    setHovered(true)
    console.log("Mouse over")
  }

  const handleMouseOut = () => {
    setHovered(false)
    console.log("Mouse out")
  }

  const getTranslateClass = (clicked: boolean, hovered: boolean, isLeft: boolean) => {
    if (clicked && hovered) return isLeft ? 'translate-y-1.5 md:translate-y-1.5' : '-translate-y-1.5 md:-translate-y-1.5';
    if (clicked) return isLeft ? 'translate-y-1.5 md:translate-y-1' : '-translate-y-1.5 md:-translate-y-1';
    if (hovered) return isLeft ? 'md:translate-y-0.5' : 'md:-translate-y-0.5';
    return 'translate-y-0 md:translate-y-0';
  }

  return (
    /**
     * onMouseOver, onMouseOut, onClick events will be set here.
     */
      <button
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className='bg-opacity-0 w-[60px] h-[60px] z-40'
        aria-label='Navigation menu button'
      >
        <div className='nav-button-boxes flex justify-between gap-1 m-2'>
          <div 
            className={`left-box w-[7px] h-[7px] border border-white transition-transform duration-333 ${getTranslateClass(getClicked, getHovered, true)}`}>
          </div>

          <div className='center-box w-[7px] h-[7px] border border-white'></div>
          
          <div 
            className={`right-box w-[7px] h-[7px] border border-white transition-transform duration-333 ${getTranslateClass(getClicked, getHovered, false)}`}>
          </div>
        </div>
      </button>
  )
}

export default NavButton;