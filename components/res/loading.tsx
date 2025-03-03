import { Spinner } from "@heroui/spinner";

import { Logo } from "./icons";

const Loading = () => (
  <div className="h-dvh w-full flex justify-center items-center bg-black light:bg-white">
    <Logo className="fill-black dark:fill-white" />
    <Spinner
      classNames={{ label: "text-foreground mt-4" }}
      label="wave"
      variant="wave"
    />
  </div>
);

export default Loading;
