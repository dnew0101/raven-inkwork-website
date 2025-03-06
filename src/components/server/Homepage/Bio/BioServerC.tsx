/**
 * Biography Server Component
 */

"use server"

function BioServerC() {
  return (
    <article className="flex flex-col items-center justify-center w-full h-auto bg-neutral-800">
        <h1>
            About Me
        </h1>
        <p className="text-white text-lg mt-2 bg-neutral-600 p-4 rounded-2xl m-4 opacity-70">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit aperiam sit ratione doloremque nam iure laborum modi temporibus sequi omnis quisquam, distinctio debitis dolores eius odit esse, ipsam praesentium facere!
        </p>
    </article>
  )
}

export default BioServerC