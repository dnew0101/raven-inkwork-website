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
      <header className="flex flex-row w-full justify-center text-center mt-[5vh] mb-[6vh] text-7xl">Digital Art Portfolio</header>
      <main className="flex flex-col w-full justify-center items-center gap-y-10">
        <Section
          title="Landscape"
          images={photoBucket}
          caption="Landscapes are a popular subject for photographers, with their wide open spaces and beautiful scenery."
          isFlexRowReverse={false}
          />
        <Section
          title="Portrait"
          images={photoBucket}
          caption="Portrait photography is a great way to capture the personality of your subject."
          isFlexRowReverse={true}
          />
        <Section
          title="Critters"
          images={photoBucket}
          caption="Critters are a fun subject for photographers, with their playful antics and cute faces."
          isFlexRowReverse={false}
          />
      </main>
    </div>
  )
}

export default page