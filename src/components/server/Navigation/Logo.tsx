"use server";
import RavenInkworkLogo from '../../../../public/RavenInkworkLogo.webp';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className='flex justify-start ml-2 w-1/2 lg:w-1/3 h-16 items-center z-40'>
      {/* Logo placeholder; request SVG/WEBP file of business logo design 
      SVG for more interactivity, WEBP for more optimization though less responsive. */}
      <Image 
        src={RavenInkworkLogo}
        alt='Raven Inkworks logo'
        width={60}
        height={60}
        />
    </div>
  )
}

export default Logo;