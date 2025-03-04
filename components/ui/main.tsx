import { ReactNode } from "react";

interface IMain {
  children: ReactNode;
}

const Main: React.FC<IMain> = ({ children }: IMain) => (
  <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
    {children}
  </main>
);

export default Main;
