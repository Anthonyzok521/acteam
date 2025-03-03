import { ReactElement, SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface ISliderWord {
  words: Array<IWord>;
}

export interface IWord {
  title: string;
  icon: (props: any) => ReactElement;
}
