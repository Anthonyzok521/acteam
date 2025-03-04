import { Spinner } from "@heroui/spinner";

import { Logo } from "./icons";

interface ILoading {
  className?: string
}

const Loading = ({className}:ILoading) => (
  <div className={`h-dvh w-full flex flex-col justify-center items-center bg-black light:bg-white`}>
    <Logo className="fill-black dark:fill-white" />
    <Spinner variant="wave" classNames={{ label: "text-foreground mt-4" }} />
  </div>
);

export default Loading;
