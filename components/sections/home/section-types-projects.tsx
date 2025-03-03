"use client";

import { SliderWord } from "@/components/res/silder-words";
import { words } from "@/config/const";

export const SectionTypesProjects = () => (
  <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    <SliderWord words={words} />
  </section>
);
