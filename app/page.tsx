import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import Spline from "@splinetool/react-spline";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/res/icons";

export default function Home() {
  return (
    <>
      <div style={{ height: "50dvh" }}>
        <Spline scene="https://prod.spline.design/uj3Rm42I9uyjugfM/scene.splinecode" />
      </div>

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Creando&nbsp;</span>
          <span className={title({ color: "violet" })}>proyectos&nbsp;</span>
          <br />
          <span className={title()}>para el mundo.</span>
          <div className={subtitle({ class: "mt-4" })}>
            Con diferentes tecnologías para la diversidad.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.news}
          >
            Novedades
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>
    </>
  );
}
