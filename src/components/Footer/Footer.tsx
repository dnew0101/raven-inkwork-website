import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faReddit, faThreads } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Footer = () => {
    const links = [
            {
                name: 'Instagram',
                link: 'https://www.instagram.com/',
                icon: faInstagram
            },
            {
                name: 'Reddit',
                link: 'https://www.bluesky.com/',
                icon: faReddit
            },
            {
                name: 'Threads',
                link: 'https://www.linkedin.com/',
                icon: faThreads
            },
            {
                name: 'Reddit',
                link: 'https://www.youtube.com/',
                icon: faEnvelope
            }
        ];

  return (
    <div className='relative flex flex-col justify-center align-middle w-full h-[30vh] mt-80'>
        <Image 
            src={'/Home-Page-Assets/Raven-Heart.png'}
            alt='Raven sitting.'
            width={300}
            height={300}
            className='absolute -top-8 right-[20%] sm:right-[30%] md:right-[40%] z-10'
        />
        <footer className="relative text-white text-center p-4 mt-56 h-[15vh] w-full border-t border-white bg-black">
                <ul className='flex flex-row flex-wrap justify-center align-middle py-4 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto'>
                            {links.map((link, index) => (
                                <li key={index} className='w-1/6 flex flex-row justify-center align-middle z-20'>
                                    <a href={link.link} target='_blank' rel='noreferrer' className='flex flex-row justify-center align-middle'>
                                        <FontAwesomeIcon 
                                        icon={link.icon}
                                        className='size-10'
                                        aria-label={link.name} 
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                <p>&copy; 2025 Raven Inkwork</p>
        </footer>
    </div>
  )
}

export default Footer