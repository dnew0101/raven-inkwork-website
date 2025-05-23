import dynamic from "next/dynamic"

const EmblaCarousel = dynamic(
  () => import("../Globals/Carousel/EmblaCarousel")
);

type SectionsProps = {
    title: string;
    images: string[];
    caption: string | React.ReactNode;
    isFlexRowReverse: boolean;
}

const Section = ({title, images, caption, isFlexRowReverse} : SectionsProps) => {
  return (
    <section 
      className="Recyclable-Section relative flex flex-col justify-center items-center h-auto w-full"
      style={{ contain: "layout" }}
    >
      <div className='flex flex-col gap-8 w-full items-center'>
      <div
          className={`flex flex-col ${
            isFlexRowReverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-4 justify-center items-center w-[90%] h-full border-2 border-white py-8 sm:p-6 md:p-8 lg:gap-24 xl:20`}
        >
          
            <article className='Text-Container flex flex-col justify-center w-[90%]
                md:w-[70%] lg:w-[50%] xl:w-[40%] lg:h-full p-4 text-center'>
                  <h2 className=' flex flex-col text-3xl sm:text-5xl text-center justify-center'>
                    {title}
                  </h2>
                  <summary className='flex flex-col text-sm sm:text-lg text-center justify-center mt-4
                  border-2 border-white lg:my-10 p-4'>
                    <p>{caption}</p>
                  </summary>
            </article>
            <figure className='Carousel-Container flex flex-col gap-2
              justify-center items-center w-[90%] sm:w-[80%]
              md:w-[70%] lg:w-[50%] xl:w-[40%] h-full'>
                <EmblaCarousel slides={images}></EmblaCarousel>
            </figure>

          </div>
      </div>
    </section>
  )
}

export default Section