"use server";
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link 
      className='flex justify-start ml-2 w-1/2 lg:w-1/3 h-16 items-center z-40'
      href='/'>
      {/* Logo placeholder; request SVG/WEBP file of business logo design 
      SVG for more interactivity, WEBP for more optimization though less responsive. */}
      <Image 
        src="/Global-Assets/RavenInkworkLogo.webp"
        alt='Raven Inkworks logo'
        width={60}
        height={60}
        />
    </Link>
  )
}

export default Logo;