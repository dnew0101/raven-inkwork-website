import Script from "next/script";
import Section from "../../components/Art-Pages/Section";

const redditAvatars = [
  '/Fallback-Assets/Digital-Art/Reddit/Avatar_1.webp',
  '/Fallback-Assets/Digital-Art/Reddit/Avatar_2.webp',
  '/Fallback-Assets/Digital-Art/Reddit/Avatar_3.webp',
  '/Fallback-Assets/Digital-Art/Reddit/Avatar_4.webp',
];
const commissionedWork = [
  '/Fallback-Assets/Digital-Art/Commission/Commission_1.webp',
  '/Fallback-Assets/Digital-Art/Commission/Commission_2.webp',
  '/Fallback-Assets/Digital-Art/Commission/Commission_3.webp',
];

function DigitalArtPortfolio() {
  const digitalArtJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Digital Art Portfolio - Raven Inkwork',
    'description': 'Portfolio showcasing digital art including Reddit Avatars and commissioned digital artwork by Raven Inkwork, a multimedia artist in Tacoma, Washington.',
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'item': {
            '@type': 'VisualArtwork',
            'name': 'Reddit Avatars',
            'description': 'A collection of Reddit Avatars created for the official Reddit Avatar Shop. These digital collectibles feature unique character designs with creative themes.',
            'artform': 'Digital Art',
            'artMedium': 'Digital Illustration',
            'url': 'https://www.reddit.com/avatar/shop/artist/SubduedRaven',
            'creator': {
              '@type': 'Person',
              'name': 'SubduedRaven',
              'sameAs': 'https://www.reddit.com/u/SubduedRaven/'
            }
          }
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'item': {
            '@type': 'VisualArtwork',
            'name': 'Commissioned Digital Art',
            'description': 'These are pieces done as commissioned work, primarily for Reddit communities including a crypto coin logo, story art, and more.',
            'artform': 'Digital Art',
            'artMedium': 'Digital Illustration',
            'genre': ['Logo Design', 'Illustration', 'Character Design']
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
        'name': 'Digital Art Services',
        'description': 'Custom digital artwork including character design, logos, illustrations, and more. Available for commission work.'
      }
    }
  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto mt-[5vh]">
      <Script
        id="digital-art-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(digitalArtJsonLd) }}
      />
      <header className="flex flex-row w-full justify-center text-center mt-[5vh] mb-[6vh]">
        <h1 className="text-5xl sm:text-7xl">Digital Art Portfolio</h1>
      </header>
      <main className="flex flex-col w-full justify-center items-center gap-y-10">
        <Section
          title="Reddit"
          images={redditAvatars}
          caption={
          <>
            <span>This is a collection of my favorite <a href="https://www.reddit.com/avatar/shop/artist/SubduedRaven" className="text-blue-500 underline">Reddit Avatars</a> that I&apos;ve made. I&apos;ve been doing them for about a year now and find it very fun to try and challenge myself to make new and creative works within the given guidelines.</span>
          </>
          }
          isFlexRowReverse={false}
          />
        <Section
          title="Commissioned Work" 
          images={commissionedWork}
          caption="These are pieces I have done as commissioned work, primarily for Reddit communities that I am a part of. This includes a crypto coin logo, story art, and more."
          isFlexRowReverse={true}
          />
      </main>
    </div>
  )
}

export default DigitalArtPortfolio;