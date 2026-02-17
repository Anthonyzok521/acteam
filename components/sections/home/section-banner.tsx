"use client";

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { subtitle, title } from "@/components/primitives";
import { GithubIcon } from "@/components/res/icons";
import { siteConfig } from "@/config/site";

const SectionBanner = () => (
  <section className="md:h-[82dvh] flex flex-col items-center justify-center gap-4">
    <div className="z-10 inline-block max-w-xl text-center justify-center">
      <span className={`${title()} text-white`}>Creando&nbsp;</span>
      <span
        className={`tracking-tight inline font-semibold text-[2.3rem] lg:text-5xl leading-9 bg-clip-text text-transparent bg-gradient-to-b from-[#FF1CF7] to-[#b249f8] dark:from-[#5EA2EF] dark:to-[#0072F5]`}
      >
        proyectos&nbsp;
      </span>
      <br />
      <span className={`${title()} text-white`}>para el mundo.</span>
      <div className={subtitle({ class: "mt-4" })}>
        Con diferentes tecnologías para la diversidad.
      </div>
    </div>

    <div className="flex gap-3">
      <Link
        className={buttonStyles({
          radius: "full",
          variant: "shadow",
          className: "dark:bg-[#0072F5] bg-[#FF1CF7] text-white",
        })}
        href={siteConfig.links.news}
      >
        Novedades
      </Link>
      <Link
        isExternal
        className={buttonStyles({
          variant: "bordered",
          radius: "full",
          className: "text-white",
        })}
        href={siteConfig.links.github}
      >
        <GithubIcon size={20} />
        GitHub
      </Link>
    </div>
  </section>
);

export default SectionBanner;
