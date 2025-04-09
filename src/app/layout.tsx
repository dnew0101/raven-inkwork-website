import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Navigation/Header";
import Footer from "../components/Footer/Footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
  variable: "--font-inter",
  preload: true,
  fallback: ['Arial','system-ui', 'sans-serif']
});

export const metadata: Metadata = {
  title: "Raven Inkwork | Tattoo Artist | Tacoma, WA",
  description: "Tattoo artist working out of Ethereal Tattoo in Tacoma, Washington. Specializing in fine line, illustrative, and neo-traditional tattoo styles.",
  icons: {
    icon: {url: "/favicon.ico", sizes: "any"},
    shortcut: "/favicon.ico",
    apple: { url: "/Global-Assets/RavenInkworkLogo.webp", sizes: "180x180" }, 
  },
  openGraph: {
    title: "Raven Inkwork | Tattoo Artist | Tacoma, WA",
    description: "Tattoo artist working out of Ethereal Tattoo in Tacoma, Washington. Specializing in fine line, illustrative, and neo-traditional tattoo styles.",
    url: "https://www.raveninkwork.com",
    siteName: "Raven Inkwork | Tattoo Artist | Tacoma, WA",
    images: [
      {
        url: "https://www.raveninkwork.com/Global-Assets/RavenInkworkLogo.webp",
        width: 600,
        height: 600,
        alt: "Raven Inkwork Logo",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Person', 'Artist'],
    name: 'Raven Inkwork',
    image: 'https://www.raveninkwork.com/Global-Assets/RavenInkworkLogo.webp',
    description: 'Multimedia artist, specializing in tattoo, digital art, and photography. Located in Tacoma, Washington.',
    url: 'https://www.raveninkwork.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1703C Dock St',
      addressLocality: 'Tacoma',
      addressRegion: 'WA',
      addressCountry: 'US'
    },
    worksFor: {
      '@type': 'TattooParlor',
      name: 'Ethereal Tattoo',
      description: 'Ethereal Tattoo is the best appointment-only tattoo shop in Tacoma, Washington. It is located right on Thea Foss Waterway.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1703C Dock St',
        addressLocality: 'Tacoma',
        addressRegion: 'WA',
        postalCode: '98402',
        addressCountry: 'US'
      },
      url: 'https://www.etherealtattootacoma.com/',
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Nearby Landmark',
          value: 'Museum of Glass (2 blocks)'
        },
        {
          '@type': 'PropertyValue',
          name: 'Nearby Landmark',
          value: 'Thea Foss Waterway (adjacent)'
        },
        {
          '@type': 'PropertyValue',
          name: 'Nearby Landmark',
          value: 'Tacoma Art Museum (5 minute walk)'
        },
        {
          '@type': 'PropertyValue',
          name: 'Nearby Landmark',
          value: 'University of Washington - Tacoma Campus (5 minute walk)'
        },
        {
          '@type': 'PropertyValue',
          name: 'Nearby Landmark',
          value: 'Greater Tacoma Convention Center (10 minute walk)'
        },
      ],
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '47.24805450439453',
        longitude: '-122.43497467041016'
      }
    },

    alumniOf: [
      {
        '@type': 'TattooParlor',
        name: 'Brass Monkey 2',
        description: 'Popular Tacoma street shop.',
        url: 'https://www.yelp.com/biz/brass-monkey-2-tattoo-tacoma',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '3505 6th Avenue',
          addressLocality: 'Tacoma',
          addressRegion: 'WA',
          postalCode: '98406',
          addressCountry: 'US'
        },
      },
      {
        '@type': 'TattooParlor',
        name: 'Rare Breed Ink',
        description: 'One of the best appointment-only tattoo shops in Tacoma. Los and Sam are both amazing artists.',
        url: 'https://www.rarebreedinkstudio.com/',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '711 St Helens Ave #201',
          addressLocality: 'Tacoma',
          addressRegion: 'WA',
          postalCode: '98402',
          addressCountry: 'US'
        },
      },
      {
        '@type': 'TattooParlor',
        name: 'Cicada Tattoo',
        description: 'Tacoma location of a well-known Seattle tattoo shop.',
        url: 'https://cicadatattoo.com/',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1128 S L St',
          addressLocality: 'Tacoma',
          addressRegion: 'WA',
          postalCode: '98405',
          addressCountry: 'US'
        },
      },
      {
        '@type': 'TattooParlor',
        name: 'Pacific Ave Tattoo', 
        description: 'Popular street shop in downtown Tacoma where I gained early experience in the industry.',
        url: 'https://www.yelp.com/biz/pacific-ave-tattoo-tacoma',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '4822 Pacific Ave',
          addressLocality: 'Tacoma',
          addressRegion: 'WA',
          postalCode: '98408',
          addressCountry: 'US'
        },
      },
  ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tattoo Services',
          description: 'Custom tattoo design and application'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Art',
          description: 'Custom digital artwork creation'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Photography',
          description: 'Professional photography services'
        }
      }
    ],
    sameAs: [
      'https://www.instagram.com/raveninkwork/',
      'https://www.reddit.com/u/SubduedRaven/',
      'https://www.threads.net/@raveninkwork/',
    ]
  };
  return (
    <html lang="en">
      <body
        className={`${inter.variable} 
          antialiased w-full h-full flex flex-col min-h-screen overflow-x-hidden`}
      >
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
          <main className="flex flex-col items-center z-0">
              {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
