import Section from "../../components/Art-Pages/Section";

const redditAvatars = [
  '/Fallback-Assets/Digital-Art/Reddit/Avatar_1.webp',
  '/Fallback-Assets/Digital-Art/Reddit/Avatar_2.webp',
  '/Fallback-Assets/Digital-Art/Reddit/Avatar_3.webp',
  '/Fallback-Assets/Digital-Art/Reddit/Avatar_4.webp',
];
const commissionedWork = [
  '/Fallback-Assets/Digital-Art/Commission/Commission_1.webp',
  '/Fallback-Assets/Digital-Art/Commission/Commission_2.webp',
  '/Fallback-Assets/Digital-Art/Commission/Commission_3.webp',
];

function page() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto mt-[5vh]">
      <header className="flex flex-row w-full justify-center text-center mt-[5vh] mb-[6vh] text-7xl">Digital Art Portfolio</header>
      <main className="flex flex-col w-full justify-center items-center gap-y-10">
        <Section
          title="Reddit"
          images={redditAvatars}
          caption={
          <>
            <span>This is a collection of my favorite <a href="https://www.reddit.com/avatar/shop/artist/SubduedRaven" className="text-blue-500 underline">Reddit Avatars</a> that I&apos;ve made. I&apos;ve been doing them for about a year now and find it very fun to try and challenge myself to make new and creative works within the given guidelines.</span>
          </>
          }
          isFlexRowReverse={false}
          />
        <Section
          title="Commissioned Work" 
          images={commissionedWork}
          caption="These are pieces I have done as commissioned work, primarily for Reddit communities that I am a part of. This includes a crypto coin logo, story art, and more."
          isFlexRowReverse={true}
          />
      </main>
    </div>
  )
}

export default page