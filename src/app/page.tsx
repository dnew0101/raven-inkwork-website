/**
 * Server component; inner node, not a leaflet/client component
 */

/**
 * Home page.
 */
import BioServerC from "@/components/server/Homepage/Bio/BioServerC";
import ProjectsSection from "@/components/server/Homepage/CurrentProjects/ProjectsSectionServC";
import HeroServer from "@/components/server/Homepage/Hero/HeroServer";
import MerchSection from "@/components/server/Homepage/Merchandise/MerchSectionServC";
import BlogPost from "@/components/server/Homepage/BlogSection/BlogPost";
import SocialMediaLinks from "@/components/server/Homepage/Links/SocialMediaLinks";

export default function Home() {
  return (
    <div className="w-full h-auto">
      <main className="flex flex-col items-center justify-center min-h-screen w-full gap-y-4">
        <HeroServer />
        <BioServerC />
        <ProjectsSection />
        <MerchSection />
        <BlogPost />
        <SocialMediaLinks />
      </main>
    </div>
  );
}
