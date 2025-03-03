/**
 * Custom toggle button for the navigation bar.
 * Modeled after https://atelier.net/virtual-economy/ nav button.
 */
"use client"
import React, { useState } from 'react'

function NavButton() {
  const [getClicked, setClicked] = useState(false)
  const [getHovered, setHovered] = useState(false)

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

  return (
    /**
     * onMouseOver, onMouseOut, onClick events will be set here.
     */
    <button 
      onClick={handleClick} 
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut}
      className='bg-opacity-0 w-[50px] h-[50px]'
    >
      <div className='nav-button-boxes flex justify-between gap-1 m-2'>

        <div 
          className=
            {`left-box w-[6px] h-[6px] border border-white transition-transform duration-200 
              ${getClicked && getHovered ? 'translate-y-2' : getClicked ? 'translate-y-1' : getHovered ? 'translate-y-0.5' : 'translate-y-0'}
          `}
        ></div>

        <div className='center-box w-[6px] h-[6px] border border-white'></div>

        <div className=
            {`right-box w-[6px] h-[6px] border border-white transition-transform duration-200 
              ${getClicked && getHovered ? '-translate-y-2' : getClicked ? '-translate-y-1' : getHovered ? '-translate-y-0.5' : 'translate-y-0'}
          `}></div>

      </div>
    </button>
  )
}

export default NavButton