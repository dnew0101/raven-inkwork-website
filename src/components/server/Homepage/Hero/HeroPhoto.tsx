import Image from 'next/image';
import Photo from '@/../public/stock_hero.jpg';

function HeroPhoto() {
  return (
        <Image
          src={Photo}
          alt='Hero photo'
          style={{objectFit: 'cover'}}
          layout='fill'>
        </Image>
  )
}

export default HeroPhoto