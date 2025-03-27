import EmblaCarousel from '../Globals/Carousel/EmblaCarousel';

type SectionsProps = {
    title: string;
    images: string[];
    caption: string;
    isFlexRowReverse: boolean;
}

const Section = ({title, images, caption, isFlexRowReverse} : SectionsProps) => {
  return (
    <section className="Recyclable-Section relative flex flex-col justify-center items-center h-auto w-full">
      <div className='flex flex-col gap-8 w-full items-center'>
      <div
          className={`flex flex-col ${
            isFlexRowReverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-2 justify-center items-center w-[90%] h-full border-2 border-white py-14 sm:p-10 md:p-14 lg:gap-6`}
        >
          
            <article className='Text-Container flex flex-col justify-center w-[90%]
                md:w-[70%] lg:h-full p-4 border-2 border-white text-center'>
                  <h1 className='lg:h-[200px] flex flex-col text-4xl text-center justify-center'>
                    {title}
                  </h1>
                  <summary className='flex flex-col text-md text-center justify-center 
                  border-2 border-white lg:my-10 p-4'>
                    {caption}
                  </summary>
            </article>
            <figure className='Carousel-Container flex flex-col gap-2
              justify-center items-center w-[90%]
                md:w-[70%] h-full'>
                <EmblaCarousel slides={images}></EmblaCarousel>
            </figure>

          </div>
      </div>
    </section>
  )
}

export default Section