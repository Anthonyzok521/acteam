"use client";

import { ReactNode, Suspense } from "react";

import dynamic from "next/dynamic";

import Loading from "../res/loading";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

const Main = dynamic(() => import("@/components/ui/main"));

interface IContent {
  children: ReactNode;
}

const Content: React.FC<IContent> = ({ children }: IContent) => (
  <Suspense fallback={<Loading />}>
    <div className="relative flex flex-col h-screen overflow-x-hidden">
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </div>
  </Suspense>
);

export default Content;
