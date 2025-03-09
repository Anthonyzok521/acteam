"use client";

import Spline from "@splinetool/react-spline";

import SectionBanner from "@/components/sections/home/section-banner";
import { SectionTypesProjects } from "@/components/sections/home/section-types-projects";

const HomePage = () => (
  <>
    <Spline
      className="bg-[linear-gradient(60deg,rgba(255,255,255,1)_0%,rgba(193,20,237,1)_100%)] dark:bg-gradient-to-r dark:from-blue-900 dark:to-blue-500  absolute top-0 left-0 h-dvh w-full"
      scene="https://prod.spline.design/usMWZOxmTIs8tERg/scene.splinecode"
    />
    <SectionBanner />
    <SectionTypesProjects />
  </>
);

export default HomePage;
