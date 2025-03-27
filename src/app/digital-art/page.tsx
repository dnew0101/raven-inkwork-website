import Section from "../../components/Art-Pages/Section";

const photoBucket = [
  '/backgroundEdgy.jpg',
  '/backgroundNightSky.jpg',
  '/stock_hero.jpg',
  '/Home-Page-Assets/Raven-Question.png',
];

// const fineLinePhotoBucket = [];
// const neoTraditionalPhotoBucket = [];
// const otherPhotoBucket = [];

function page() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto mt-[5vh]">
      <header className="flex flex-row w-full justify-center text-center mt-[5vh] mb-[6vh] text-7xl">Digital Art Portfolio</header>
      <main className="flex flex-col w-full justify-center items-center gap-y-10">
        <Section
          title="Reddit"
          images={photoBucket}
          caption="Reddit art collection..."
          isFlexRowReverse={false}
          />
        <Section
          title="2-D Pixel Art"
          images={photoBucket}
          caption="Pixel art for games..."
          isFlexRowReverse={true}
          />
        <Section
          title="Illustrative"
          images={photoBucket}
          caption="Illustrative art..."
          isFlexRowReverse={false}
          />
      </main>
    </div>
  )
}

export default page