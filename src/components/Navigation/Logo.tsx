"use server";
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link 
      className='flex justify-start ml-2 w-1/2 lg:w-1/3 h-16 items-center z-40'
      href='/'>
        <Image 
          src="/Global-Assets/RavenInkworkLogo.webp"
          alt='Raven Inkworks logo'
          width={60}
          height={60}
          style={{ width: 'auto', height: 'auto' }}
          />
    </Link>
  )
}

export default Logo;