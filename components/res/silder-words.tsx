"use client";

import { FC, useCallback, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import { ISliderWord } from "@/types";

interface MovingElement {
  id: number;
  offset: number;
  text: string;
  icon: (props: any) => JSX.Element;
}

export const SliderWord: FC<ISliderWord> = ({ words }: ISliderWord) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [elements, setElements] = useState<MovingElement[]>([]);
  const animationRef = useRef<number>();
  const offsetRef = useRef(0);
  const speed = 0.0005;

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;

    setContainerWidth(width);

    const initialElements: MovingElement[] = words.map((word, i) => ({
      id: i,
      offset: i / words.length,
      text: word.title,
      icon: word.icon,
    }));

    setElements(initialElements);
  }, [words]);

  const animate = useCallback(() => {
    offsetRef.current += speed;
    if (offsetRef.current >= 1) {
      offsetRef.current = 0;
    }

    setElements((prevElements) =>
      prevElements.map((element) => ({
        ...element,
        offset: (element.offset + speed) % 1,
      })),
    );

    animationRef.current = requestAnimationFrame(animate);
  }, [speed]);

  useEffect(() => {
    if (elements.length === 0 || !containerWidth) return;

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [elements, containerWidth, animate]);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      setContainerWidth(containerRef.current.clientWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const elementWidth = 100;
  const gap = containerWidth > 768 ? 50 : 550;

  return (
    <div className="w-screen h-36 dark:bg-stripe-gradient-primary bg-stripe-gradient-secondary p-4">
      <div
        ref={containerRef}
        className="relative w-full h-full overflow-hidden bg-transparent"
      >
        {elements.map((element) => {
          const position =
            element.offset * (containerWidth + elementWidth + gap) -
            elementWidth;

          return (
            <motion.div
              key={element.id}
              className="absolute h-full rounded-md flex flex-col items-center justify-center text-white font-bold group"
              style={{
                left: `${position}px`,
                top: "calc(30% - 30px)", // Centrado vertical
                width: elementWidth,
              }}
              initial={false}
            >
              {element.icon({
                size: 30,
                className:
                  "dark:fill-white fill-white group-hover:fill-black dark:group-hover:fill-black",
              })}
              <span className="group-hover:text-black dark:group-hover:text-black light:text-white">
                {element.text}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
