/**
 * If viewport is under Tailwind lg breakpoint, component will be hidden, and display as
 * a dropdown navigation system.
 * 
 * If larger than lg, display as a horizontal navigation bar.
 */

import React from 'react'

function NavLinks() {
  return (
    <nav>
        <ul>
            <li>
                Home
            </li>
            <li>
                Tattoo
            </li>
            <li>
                Digital Art
            </li>
            <li>
                Photography
            </li>
            <li>
                Contact
            </li>
        </ul>
    </nav>
  )
}

export default NavLinks