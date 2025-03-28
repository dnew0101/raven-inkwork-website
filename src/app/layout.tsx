import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Navigation/Header";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raven Inkwork",
  description: "Multimedia artist, specializing in tattoo, digital art, and photography. Located in Tacoma, Washington.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </Head>
      <body
        className={`${inter.variable} 
          antialiased w-full h-full flex flex-col min-h-screen overflow-x-hidden`}
      >
        <Header />
          <main className="flex flex-col items-center z-0">
              {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
