import { Suspense, lazy } from "react";

import { Link } from "@heroui/link";
import { Spinner } from "@heroui/spinner";
import { button as buttonStyles } from "@heroui/theme";

import { subtitle, title } from "@/components/primitives";
import { GithubIcon } from "@/components/res/icons";
import { siteConfig } from "@/config/site";

const Acteam3D = lazy(() => import("@/components/res/acteam3d"));

export const SectionBanner = async () => (
  <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    <div style={{ height: "50dvh", width: "99vw" }}>
      <Suspense
        fallback={
          <Spinner
            classNames={{ label: "text-foreground mt-4" }}
            label="wave"
            variant="wave"
          />
        }
      >
        <Acteam3D />
      </Suspense>
    </div>
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
);
