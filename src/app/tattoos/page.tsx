import Section from "@/components/Art-Pages/Section"

const photoBucket = [
  '/backgroundEdgy.jpg',
  '/backgroundNightSky.jpg',
  '/stock_hero.jpg',
  '/Home-Page-Assets/Raven-Question.png',
];

const fineLinePhotoBucket = [];
const neoTraditionalPhotoBucket = [];
const otherPhotoBucket = [];

function page() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto mt-[5vh]">
      <header className="flex flex-row w-full justify-center text-center mt-[5vh] mb-[6vh] text-7xl">Tattoo Portfolio</header>
      <main className="flex flex-col w-full justify-center items-center gap-y-10">
        <Section
          title="Fine Line"
          images={photoBucket}
          caption="Fine line tattoos are a delicate art form that can be used to create intricate designs."
          isFlexRowReverse={false}
          />
        <Section
          title="Neo-Traditional"
          images={photoBucket}
          caption="Neo-traditional tattoos are a modern take on the traditional style, with bold lines and bright colors."
          isFlexRowReverse={true}
          />
        <Section
          title="Something Else"
          images={photoBucket}
          caption="Blank..."
          isFlexRowReverse={false}
          />
      </main>
    </div>
  )
}

export default page