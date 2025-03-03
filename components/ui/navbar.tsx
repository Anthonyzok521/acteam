"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import NextLink from "next/link";

import { ArrowSignUp, Logo } from "@/components/res/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo className="dark:fill-white" />
            <p className="font-bold text-inherit hidden lg:block">
              Advanced Community
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden w-full sm:flex gap-4 justify-end ml-2">
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
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full max-w-max"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            className=""
            href={siteConfig.links.signIn}
            radius="full"
            color={`${hover ? "primary" : "default"}`}
            variant={`${hover ? "shadow" : "flat"}`}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            Sign In
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            className="text-sm font-normal text-default-600 bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]"
            endContent={
              <ArrowSignUp className="flex items-center justify-center text-center mt-1" />
            }
            href={siteConfig.links.signUp}
            radius="full"
            variant="shadow"
          >
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
