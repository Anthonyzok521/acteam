import { ReactNode } from "react";

import { Footer } from "./footer";
import { Navbar } from "./navbar";

interface IContent {
  children: ReactNode;
}

const Content: React.FC<IContent> = ({ children }: IContent) => (
  <div className="relative flex flex-col h-screen">
    <Navbar />
    <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

export default Content;
