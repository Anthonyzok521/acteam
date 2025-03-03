"use client";

import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";

import { Navbar, NavbarItem } from "@heroui/navbar";
import NextLink from "next/link";
import clsx from "clsx";

import { GithubIcon, Logo, XIcon } from "@/components/res/icons";
import { siteConfig } from "@/config/site";

export const Footer = () => (
  <footer className="w-full flex flex-col items-center justify-center py-3">
    <Logo />
    <Navbar>
      <ul className="hidden w-full sm:flex gap-4 justify-center ml-2">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium",
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}
      </ul>
    </Navbar>
    <div className="flex gap-4">
      <Link isExternal aria-label="X" href={siteConfig.links.x}>
        <XIcon className="text-default-500" />
      </Link>
      <Link isExternal aria-label="Github" href={siteConfig.links.github}>
        <GithubIcon className="text-default-500" />
      </Link>
    </div>
    <p className="opacity-80 mt-2">
      © 2025 Advanced Community. All rights reserved.
    </p>
  </footer>
);
