import Section from "../../components/Art-Pages/Section";
import Script from "next/script";

const AnimePhotoBucket = [
  '/Fallback-Assets/Tattoos/Anime/Anime_1.webp',
  '/Fallback-Assets/Tattoos/Anime/Anime_2.webp',
  '/Fallback-Assets/Tattoos/Anime/Anime_3.webp',
];
const DarkPhotoBucket = [
  '/Fallback-Assets/Tattoos/Dark/Dark_1.webp',
  '/Fallback-Assets/Tattoos/Dark/Dark_2.webp',
  '/Fallback-Assets/Tattoos/Dark/Dark_3.webp',
];
const FinelinePhotoBucket = [
  '/Fallback-Assets/Tattoos/Fineline/Fineline_1.webp',
  '/Fallback-Assets/Tattoos/Fineline/Fineline_2.webp',
  '/Fallback-Assets/Tattoos/Fineline/Fineline_3.webp',
];
const FloralPhotoBucket = [
  '/Fallback-Assets/Tattoos/Floral/Floral_1.webp',
  '/Fallback-Assets/Tattoos/Floral/Floral_2.webp',
  '/Fallback-Assets/Tattoos/Floral/Floral_3.webp',
];
const IllustrativePhotoBucket = [
  '/Fallback-Assets/Tattoos/Illustrative/Illustrative_1.webp',
  '/Fallback-Assets/Tattoos/Illustrative/Illustrative_2.webp',
  '/Fallback-Assets/Tattoos/Illustrative/Illustrative_3.webp',
];
const LetteringPhotoBucket = [
  '/Fallback-Assets/Tattoos/Lettering/Lettering_1.webp',
  '/Fallback-Assets/Tattoos/Lettering/Lettering_2.webp',
  '/Fallback-Assets/Tattoos/Lettering/Lettering_3.webp',
];
// const LineworkPhotoBucket = [
//   '/Fallback-Assets/Tattoos/Linework/Linework_1.webp',
//   '/Fallback-Assets/Tattoos/Linework/Linework_2.webp',
//   '/Fallback-Assets/Tattoos/Linework/Linework_3.webp',
// ];
const NeoTradPhotoBucket = [
  '/Fallback-Assets/Tattoos/NeoTrad/NeoTrad_1.webp',
  '/Fallback-Assets/Tattoos/NeoTrad/NeoTrad_2.webp',
  '/Fallback-Assets/Tattoos/NeoTrad/NeoTrad_3.webp',
];

function TattooPortfolio() {
  const tattooJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Tattoo Portfolio - Raven Inkwork',
    'description': 'Portfolio showcasing tattoo styles including Fine Line, Illustrative, Neo-Traditional, Dark, Anime, Floral, and Lettering designs by Raven Inkwork, a tattoo artist in Tacoma, Washington.',
    'mainEntity': {
        'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'item': {
          '@type': 'VisualArtwork',
          'name': 'Fine Line Tattoo Style',
          'description': 'Fine-line pieces are the majority of my portfolio at this point and what I would consider to be one of my strongest styles. I love little details and delicate designs, but I also prioritize the longevity and legibility of my work.',
          'artform': 'Tattoo',
          'artMedium': 'Ink on skin'
        }
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'item': {
          '@type': 'VisualArtwork',
          'name': 'Illustrative Tattoo Style',
          'description': 'While I do tend to use delicate lines for smaller details, similar to my fineline work, my illustrative projects tend to be more focused on wildlife. I also use a wider variety of line weights and add more shading/contrast.',
          'artform': 'Tattoo',
          'artMedium': 'Ink on skin',
        }
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'item': {
          '@type': 'VisualArtwork',
          'name': 'Neo-Traditional Tattoo Style',
          'description': 'I am absolutely in love with the Neo-Traditional style, and would be so excited to take on more work like this. I am currently offering a discounted rate for Neo-Traditional projects.',
          'artform': 'Tattoo',
          'artMedium': 'Ink on skin',
          'offers': {
            '@type': 'Offer',
            'description': 'Discounted rates available for Neo-Traditional tattoo designs'
          }
        }
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'item': {
          '@type': 'VisualArtwork',
          'name': 'Dark Tattoo Style',
          'description': 'With a bit of a melting pot for styles this is a collection of my work that has a heavier focus on bold designs and dark statement pieces. I am very comfortable in this style as well and am always willing to work on similar designs.',
          'artform': 'Tattoo',
          'artMedium': 'Ink on skin',
        }
      },
      {
        '@type': 'ListItem',
        'position': 5,
        'item': {
          '@type': 'VisualArtwork',
          'name': 'Anime Tattoo Style',
          'description': 'A collection of panels or artwork from anime or manga. I love doing everything from Studio Ghibli to Junji Ito. My attention to detail and variety of technique allow me to use a range of skills. I love projects like these.',
          'artform': 'Tattoo',
          'artMedium': 'Ink on skin',
          'genre': ['Anime', 'Manga']
        }
      },
      {
        '@type': 'ListItem',
        'position': 6,
        'item': {
          '@type': 'VisualArtwork',
          'name': 'Floral Tattoo Style',
          'description': 'Mostly delicate and fineline work. I\'ve worked on countless floral projects and always enjoy working on them, taking from real images or scientific illustration.',
          'artform': 'Tattoo',
          'artMedium': 'Ink on skin',
          'genre': ['Botanical', 'Nature']
        }
      },
      {
        '@type': 'ListItem',
        'position': 7,
        'item': {
          '@type': 'VisualArtwork',
          'name': 'Lettering Tattoo Style',
          'description': 'While not necessarily a "style" I do know script and lettering is a specific category that I feel the need to highlight. I have done plenty of lettering pieces - from delicate cursive to bold traditional lettering.',
          'artform': 'Tattoo',
          'artMedium': 'Ink on skin',
        }
      }
    ]
  }
}

  return (
    <div className="flex flex-col justify-center items-center w-full h-auto mt-[5vh]">
      <Script
        id="tattoo-portfolio-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tattooJsonLd) }}
      />
      <header className="flex flex-row w-full justify-center text-center mt-[5vh] mb-[6vh] text-7xl">
        <h1 className="text-5xl sm:text-7xl">Tattoo Portfolio</h1>
      </header>
      <main className="flex flex-col w-full justify-center items-center gap-y-10">
        <Section
          title="Fine Line"
          images={FinelinePhotoBucket}
          caption={`Fine-line pieces are the majority of my portfolio at this point and what I would consider to be one of my strongest styles. 
          I love little details and delicate designs, but I also prioritize the longevity and legibility of my work.`}
          isFlexRowReverse={false}
          />
        <Section
          title="Illustrative"
          images={IllustrativePhotoBucket}
          caption="While I do tend to use delicate lines for smaller details, similar to my fineline work, my illustrative projects tend to be more focused on wildlife. 
          I also use a wider variety of line weights and add more shading/contrast."
          isFlexRowReverse={true}
          />
        <Section
          title="Neo-Traditional"
          images={NeoTradPhotoBucket}
          caption="I am absolutely in love with the Neo-Traditional style, and would be so excited to take on more work like this. I am currently offering a discounted rate for Neo-Traditional projects so don&#39;t hesitate to send me your ideas!"
          isFlexRowReverse={false}
          />
        <Section
          title="Dark"
          images={DarkPhotoBucket}
          caption="With a bit of a melting pot for styles this is a collection of my work that has a heavier focus on bold designs and dark statement pieces. 
          I am very comfortable in this style as well and am always willing to work on similar designs."
          isFlexRowReverse={true}
          />
        <Section
          title="Anime"
          images={AnimePhotoBucket}
          caption="A collection of panels or artwork from anime or manga. I love doing everything from Studio Ghibli to Junji Ito. 
          My attention to detail and variety of technique allow me to use a range of skills. I love projects like these."
          isFlexRowReverse={false}
          />
        <Section
          title="Floral"
          images={FloralPhotoBucket}
          caption="Mostly delicate and fineline work. I&#39;ve worked on countless floral projects and always enjoy working on them, taking from real images or scientific illustration."
          isFlexRowReverse={true}
          />
        <Section
          title="Lettering"
          images={LetteringPhotoBucket}
          caption="While not necessarily a &#34;style&#34; I do know script and lettering is a specific category that I feel the need to highlight. 
          I have done plenty of lettering pieces - from delicate cursive to bold traditional lettering."
          isFlexRowReverse={false}
          />
        {/* <Section
          title="Linework"
          images={LineworkPhotoBucket}
          caption="Line work tattoos are a popular choice for those looking for a more minimalist design, with their bold lines and bright colors."
          isFlexRowReverse={true}
          /> */}
      </main>
    </div>
  )
}

export default TattooPortfolio;