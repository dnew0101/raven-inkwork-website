import React from 'react'
import NavButton from './NavButton'
import NavLinks from './NavLinks'


function Navbar() {
  return (
    <nav className='flex justify-between'>
      <div className='nav-links-wrapper'>
        <NavLinks />
      </div>
      <div className='nav-logo-wrapper'>
        Raven Inkworks
      </div>
      <div className='nav-button-wrapper'>
        <NavButton />
      </div>
    </nav>
  )
}

export default Navbar