import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faReddit, faThreads } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Footer = () => {
    const links = [
            {
                name: 'Instagram',
                link: 'https://www.instagram.com/raveninkwork/',
                icon: faInstagram
            },
            {
                name: 'Reddit',
                link: 'https://www.reddit.com/u/SubduedRaven/',
                icon: faReddit
            },
            {
                name: 'Threads',
                link: 'https://www.threads.net/@raveninkwork/',
                icon: faThreads
            },
            {
                name: 'Gmail',
                link: 'https://mail.google.com/mail/?view=cm&fs=1&to=raveninkwork@gmail.com&su=Direct%20Inquiry',
                icon: faEnvelope
            }
        ];
    const date = new Date().getFullYear();

  return (
    <div className='Raven-Footer-Container relative flex flex-col justify-center align-middle w-full h-[30vh] mt-80'>
        <div className='absolute w-full h-full min-h-fit flex flex-row justify-center align-middle bottom-[15vh]'>
            <Image 
                src={'/Home-Page-Assets/Raven-Heart.png'}
                alt='Raven sitting.'
                width={300}
                height={300}
                className='z-10 scale-80'
            />
        </div>
        <footer className="relative text-white text-center p-4 h-[15vh] w-full border-t border-white bg-black">
                <ul className='flex flex-row flex-wrap justify-between sm:justify-center align-middle py-4 w-full 
                sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto'>
                            {links.map((link, index) => (
                                <li key={index} className='w-1/6 flex flex-row justify-center align-middle z-20'>
                                    <a 
                                    href={link.link} 
                                    target='_blank' 
                                    rel='noreferrer' 
                                    className='flex flex-row justify-center align-middle'
                                    aria-label={`Raye's ${link.name} page.`}>
                                        <FontAwesomeIcon 
                                        icon={link.icon}
                                        className='size-10'
                                        aria-label={link.name} 
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                <p>Copyright &copy; {date} Raven Inkwork</p>
        </footer>
    </div>
  )
}

export default Footer