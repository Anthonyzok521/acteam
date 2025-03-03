"use client";

import { FC, useEffect, useState } from "react";

import { ISliderWord } from "@/types";

type props = { x: number; text: string; icon: (props: any) => JSX.Element };

const ContentText = ({ x, text, icon: Icon }: props) => (
  <div
    style={{ left: `${x}px` }}
    className={`flex-col absolute h-full select-none w-52 flex justify-center items-center group light:hover:text-white dark:hover:text-black hover:font-semibold`}
  >
    <Icon
      size={30}
      className={`dark:fill-white fill-black group-hover:fill-white dark:group-hover:fill-black`}
    />
    <span>{text}</span>
  </div>
);

export const SliderWord: FC<ISliderWord> = ({ words }: ISliderWord) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count, setCount] = useState<number>(0);
  const [posX, setPosX] = useState<Array<props>>([
    { x: 0, text: "", icon: () => <></> },
  ]);

  useEffect(() => {
    if (words.length > 1) {
      words.forEach((word) => {
        setCount((prevCount) => {
          const newCount = prevCount + 250;

          setPosX((prevPosX) => [
            ...prevPosX,
            { x: newCount, text: word.title, icon: word.icon },
          ]);

          return newCount;
        });
      });
      setPosX((prevPosX) => [
        ...prevPosX,
        { x: 250, text: "", icon: () => <></> },
      ]);
    }

    const interval = setInterval(() => {
      setPosX((prevPosX) =>
        prevPosX.map((word) => {
          const newX = word.x + 1;

          if (newX > window.innerWidth) {
            return { ...word, x: -50 };
          }

          return { ...word, x: newX };
        }),
      );
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[99vw] h-36 bg-stripe-gradient-primary relative overflow-hidden">
      {posX.map((word, index) => (
        <ContentText key={index} x={word.x} text={word.text} icon={word.icon} />
      ))}
    </div>
  );
};
