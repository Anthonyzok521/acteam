import { SectionBanner } from "@/components/sections/home/section-banner";
import { SectionTypesProjects } from "@/components/sections/home/section-types-projects";

export default async function Home() {
  return (
    <>
      <SectionBanner />
      <SectionTypesProjects />
    </>
  );
}
