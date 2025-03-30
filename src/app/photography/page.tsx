import Script from "next/script";
import Section from "../../components/Art-Pages/Section";

const LandscapePhotoBucket = [
  '/Fallback-Assets/Photography/Landscape/Landscape_1.webp',
  '/Fallback-Assets/Photography/Landscape/Landscape_2.webp',
  '/Fallback-Assets/Photography/Landscape/Landscape_3.webp',
];
const CritterPhotoBucket = [
  '/Fallback-Assets/Photography/Critter/Critter_1.webp',
  '/Fallback-Assets/Photography/Critter/Critter_2.webp',
  '/Fallback-Assets/Photography/Critter/Critter_3.webp',
];
const PortraitPhotoBucket = [
  '/Fallback-Assets/Photography/Portrait/Portrait_1.webp',
  '/Fallback-Assets/Photography/Portrait/Portrait_2.webp',
  '/Fallback-Assets/Photography/Portrait/Portrait_3.webp',
];

function PhotographyPortfolio() {
  const photoJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Photography Portfolio - Raven Inkwork',
    'description': 'Portfolio showcasing photography work including Landscape, Portrait, and Wildlife photography by Raven Inkwork, a multimedia artist in Tacoma, Washington.',
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'item': {
            '@type': 'VisualArtwork',
            'name': 'Landscape Photography',
            'description': 'My typical subject for photography. I love finding interesting architecture or striking scenes. I especially love moody settings.',
            'artform': 'Photography',
            'artMedium': 'Digital Photography',
            'genre': ['Landscape', 'Architecture', 'Urban']
          }
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'item': {
            '@type': 'VisualArtwork',
            'name': 'Portrait Photography',
            'description': 'Admittedly, this is not my strong suit in photography - I do find it fun! I would love to do more portrait work with some sort of theming or more outside of the box ideas.',
            'artform': 'Photography',
            'artMedium': 'Digital Photography',
            'genre': ['Portrait']
          }
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'item': {
            '@type': 'VisualArtwork',
            'name': 'Wildlife Photography',
            'description': 'I am a sucker for finding little critters and animals to capture! As my luck would have it I usually find the coolest things when I don\'t have my camera on me. But whenever I do it\'s so exciting. I\'ve sat in the rain for hours just waiting to capture a bird or something special and I love the process.',
            'artform': 'Photography',
            'artMedium': 'Digital Photography',
            'genre': ['Wildlife', 'Nature', 'Animal']
          }
        }
      ]
    },
    'creator': {
      '@type': 'Person',
      'name': 'Raven Inkwork',
      'url': 'https://www.raveninkwork.com',
      'sameAs': [
        'https://www.reddit.com/u/SubduedRaven/',
        'https://www.instagram.com/raveninkwork/'
      ]
    },
    'offers': {
      '@type': 'Offer',
      'itemOffered': {
        '@type': 'Service',
        'name': 'Photography Services',
        'description': 'Photography services including landscape, portrait, and wildlife photography. Based in Tacoma and the Greater Seattle area in Washington State.',
      }
    }
  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto mt-[5vh]">
      <Script
        id="photo-portfolio-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(photoJsonLd) }}
      />
      <header className="flex flex-row w-full justify-center text-center mt-[5vh] mb-[6vh]">
        <h1 className="text-5xl sm:text-7xl">Photography Portfolio</h1>
      </header>
      <main className="flex flex-col w-full justify-center items-center gap-y-10">
        <Section
          title="Landscape"
          images={LandscapePhotoBucket}
          caption="My typical subject for photography. I love finding interesting architecture or striking scenes. I especially love moody settings."
          isFlexRowReverse={false}
          />
        <Section
          title="Portrait"
          images={PortraitPhotoBucket}
          caption="Admittedly, this is not my strong suit in photography - I do find it fun! I would love to do more portrait work with some sort of theming or more outside of the box ideas."
          isFlexRowReverse={true}
          />
        <Section
          title="Critters"
          images={CritterPhotoBucket}
          caption="I am a sucker for finding little critters and animals to capture! As my luck would have it I usually find the coolest things when I don&#39;t have my camera on me. 
          But whenever I do it&#39;s so exciting. I've sat in the rain for hours just waiting to capture a bird or something special and I love the process."
          isFlexRowReverse={false}
          />
      </main>
    </div>
  )
}

export default PhotographyPortfolio;