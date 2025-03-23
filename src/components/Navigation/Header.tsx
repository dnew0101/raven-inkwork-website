/**
 * Full navbar component.
 * 
 * SERVER-SIDE COMPONENT
 */
"use server";
import dynamic from 'next/dynamic';

const Nav = dynamic(() => import('./Nav'))
const Logo = dynamic(() => import('./Logo'))
const NavCenterText = dynamic(() => import('./NavCenterText'))



function Header() {
  return (
    <header className='flex sticky top-0 z-50 mx-auto w-full h-auto items-center justify-between 
    border-b border-neutral-300 bg-black'>
      <Logo />
      <NavCenterText />
      <Nav />
    </header>
  )
}

export default Header