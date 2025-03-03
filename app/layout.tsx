import { Suspense, lazy } from "react";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import Loading from "@/components/res/loading";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";

// eslint-disable-next-line import/order
import { Providers } from "./providers";

const Content = lazy(() => import("@/components/ui/content"));

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <Suspense fallback={<Loading />}>
            <Content>{children}</Content>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
