/**
 * Full navbar component.
 * 
 * SERVER-SIDE COMPONENT
 */
import Logo from './Logo'
import Nav from './Nav'


function Header() {
  return (
    <header className='flex sticky top-0 z-[20] mx-auto w-full items-center justify-between border-b border-neutral-300'>
      <Logo />
      <Nav />
    </header>
  )
}

export default Header