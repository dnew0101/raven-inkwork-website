/**
 * Server component
 */

/**
 * Home page.
 */

"use server";
import Art from "../components/Homepage/Art/Art";
import BioSection from "../components/Homepage/Bio/BioSection";
// import BioServerC from "@/components/server/Homepage/Bio/BioServerC";
// import ProjectsSection from "@/components/server/Homepage/CurrentProjects/ProjectsSectionServC";
import HeroServer from "../components/Homepage/Hero/HeroServer";
// import MerchSection from "@/components/server/Homepage/Merchandise/MerchSectionServC";
// import BlogPost from "@/components/server/Homepage/BlogSection/BlogPost";
// import SocialMediaLinks from "@/components/server/Homepage/Links/SocialMediaLinks";

function Home() {
  return (
      <div className="w-full h-auto">
        <main className="flex flex-col justify-center min-h-screen w-full gap-y-4">
          <HeroServer />
          <Art />
          <BioSection />
          {/* <ProjectsSection />
          <MerchSection />
          <BlogPost />
          <SocialMediaLinks /> */}
        </main>
      </div>
  );
}

export default Home;
