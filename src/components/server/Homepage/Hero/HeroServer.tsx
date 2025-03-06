"use server";

import dynamic from "next/dynamic";

const HeroPhoto = dynamic(() => import('./HeroPhoto'));

function HeroServer() {
  return (
    <div className="relative flex flex-col justify-center h-[100vh] w-full bg-amber-500">
        <div className="absolute inset-0">
          <HeroPhoto />  
        </div>

        {/* Opacity of overlay's background isn't working... inspect later */}
        <div className="absolute inset-0 bg-neutral-900 opacity-80">
          <div className="relative flex flex-col justify-center items-center h-full w-full z-10">
              <h1>
                Welcome to <span className="text-black border-b border-black bg-white">Raven Inkwork</span>
              </h1>
              <p className="text-white text-lg mt-2">
                Custom art, from <span>tattoos</span> to <span>game sprites!</span>
              </p>
          </div>
        </div>
    </div>
  )
}

export default HeroServer;