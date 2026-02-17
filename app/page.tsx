import Spline from "@splinetool/react-spline";
import { headers } from "next/headers";

import ParticleLogo from "@/components/res/particle-logo";
import SectionBanner from "@/components/sections/home/section-banner";
import { SectionTypesProjects } from "@/components/sections/home/section-types-projects";
import { isMobile } from "@/utils/isMobile";

const HomePage = async () => {
  const userAgent = (await headers()).get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);

  return (
    <>
      {/* <Spline
          className="bg-[linear-gradient(60deg,rgba(255,255,255,1)_0%,rgba(193,20,237,1)_100%)] dark:bg-gradient-to-r dark:from-blue-900 dark:to-blue-500 absolute top-0 left-0 h-dvh w-full"
          scene="https://prod.spline.design/usMWZOxmTIs8tERg/scene.splinecode"
        /> */}
      {!mobileCheck ? (
        <ParticleLogo />
      ) : (
        <div className="absolute top-0 left-0 h-dvh w-full">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 h-dvh w-full object-cover"
          >
            <source src="/cubes.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <SectionBanner />
      <SectionTypesProjects />
    </>
  );
};

export default HomePage;
