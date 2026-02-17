"use client";

import { Fragment, useState } from "react";

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
import NextLink from "next/link";

import { ArrowSignUp, Logo } from "@/components/res/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="light:bg-white light:bg-opacity-50"
    >
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
          {siteConfig.navItems.map((item, index) => (
            <NavbarItem key={`n${item.href}`}>
              <NextLink
                key={`nl${index}`}
                className={"dark:hover:text-blue-500 hover:text-pink-600"}
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
            className="bg-gray-800 text-white dark:bg-slate-600"
            href={siteConfig.links.signIn}
            radius="full"
            variant={`${hover ? "shadow" : "flat"}`}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            Iniciar Sesión
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            className="text-sm font-normal text-white dark:text-default-600 bg-gradient-to-b from-[#FF1CF7] to-[#b249f8] dark:from-[#0072F5] dark:to-[#0072F5]"
            endContent={
              <ArrowSignUp className="flex items-center justify-center text-center mt-1" />
            }
            href={siteConfig.links.signUp}
            radius="full"
            variant="shadow"
          >
            Registrarse
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
        <div className="mx-4 mt-2 flex flex-col gap-2 justify-center items-center">
          {siteConfig.navMenuItems.map((item, index) => (
            <Fragment key={`fk-${index}`}>
              {!item.href.includes("/signin") &&
              !item.href.includes("/signup") ? (
                <NavbarMenuItem key={`1${item}-${index}`}>
                  <Link
                    key={`l${index}`}
                    color={index === 2 ? "primary" : "foreground"}
                    href={item.href}
                    size="lg"
                  >
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              ) : (
                <Fragment key={`fk2-${index}`}>
                  {item.href.includes("/signin") && (
                    <div
                      key={`d${index}`}
                      className="w-full h-1 bg-black dark:bg-white rounded-sm"
                    />
                  )}
                  <NavbarMenuItem key={`2${item}-${index}`} className="w-full">
                    <Link
                      key={`l2${index}`}
                      className={`w-full flex justify-center items-center p-2 rounded-md ${item.href.includes("/signin") ? "bg-default text-black dark:text-white hover:text-white hover:bg-slate-600 dark:hover:bg-gray-600" : "bg-black text-white dark:bg-white dark:text-black"}`}
                      href={item.href}
                      size="lg"
                    >
                      {item.label}
                    </Link>
                  </NavbarMenuItem>
                </Fragment>
              )}
            </Fragment>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
