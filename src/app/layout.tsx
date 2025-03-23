import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Navigation/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raven Inkworks",
  description: "Multimedia artist, specializing in tattoo, digital art, and photography. Located in Tacoma, Washington.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} 
          antialiased w-full flex flex-col overflow-x-hidden`}
      >
        <main className="flex flex-col items-center min-h-screen">
          <Header />
          {children}
          {/* <Footer /> */}
          </main>
      </body>
    </html>
  );
}
