/**
 * Contains routes to all social media links that the artist wants to promote.
 * @returns {JSX.Element} Social media links
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBluesky } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

function SocialMediaLinks() {
    const links = [
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/',
            icon: faInstagram
        },
        {
            name: 'BlueSky',
            link: 'https://www.bluesky.com/',
            icon: faBluesky
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/',
            icon: faLinkedin
        },
        {
            name: 'YouTube',
            link: 'https://www.youtube.com/',
            icon: faYoutube
        },
        {
            name: 'TikTok',
            link: 'https://www.tiktok.com/',
            icon: faTiktok
        }
    ];
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto bg-neutral-800'>
        <h1>
            Social Media Links
        </h1>
        <ul className='flex flex-row flex-wrap justify-center align-middle py-4'>
            {links.map((link, index) => (
                <li key={index} className='w-1/3 flex flex-row justify-center align-middle'>
                    <a href={link.link}>
                        <FontAwesomeIcon 
                        icon={link.icon}
                        className='size-10'
                        aria-label={link.name} 
                        />
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialMediaLinks