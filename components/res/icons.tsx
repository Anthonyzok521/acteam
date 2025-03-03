import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 72.296196 54.854744"
    id="svg1"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs id="defs1">
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath368">
        <path
          d="M 0,1831.586 H 1113.836 V 0 H 0 Z"
          transform="translate(-304.49911,-1392.7074)"
          id="path368"
        />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath366">
        <path
          d="M 0,1831.586 H 1113.836 V 0 H 0 Z"
          transform="translate(-289.10551,-1262.2028)"
          id="path366"
        />
      </clipPath>
    </defs>
    <g
      transform="matrix(0.03527778,0,0,-0.03527778,-34.821183,95.756862)"
      stroke="none"
      id="g3"
    >
      <path
        className={"dark:fill-white fill-black"}
        d="M 2146.5543,1740.5541 2491.481,1159.436 h 341.3672 C 2525.2164,1677.7465 2217.5845,2196.057 1909.9527,2714.3675 1602.3209,2196.057 1294.6891,1677.7465 987.05734,1159.436 h 341.35246 l 581.5429,979.79 c 44.2188,-74.5068 88.4376,-149.0137 132.6562,-223.5205"
        style={{
          baselineShift: "baseline",
          display: "inline",
          overflow: "visible",
          vectorEffect: "none",
          strokeWidth: 7.5,
        }}
        id="path408"
      />
      <path
        className={"dark:fill-white fill-black"}
        id="path365"
        d="M 0,0 15.392,28.25 H 1.329 L -14.063,0 Z"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="matrix(9.9999991,0,0,9.9999991,1959.5624,1409.314)"
        clipPath="url(#clipPath366)"
      />
      <path
        className={"dark:fill-white fill-black"}
        id="path367"
        d="M 0,0 -0.011,-0.018 -0.021,0 h -13 l 82.979,-139.805 h 0.021 l 9.311,-15.688 h 13 z"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="matrix(9.9999991,0,0,9.9999991,2113.4984,2714.3599)"
        clipPath="url(#clipPath368)"
      />
      <path
        className={"dark:fill-white fill-black"}
        d="M 2044.4838,1915.7056 H 1847.7407 L 1398.854,1159.436 h 1025.9472 c -40.0194,67.4365 -80.0391,134.873 -120.0585,202.3096 h -574.1455 l 206.3964,378.8086 h 211.4356"
        style={{
          baselineShift: "baseline",
          display: "inline",
          overflow: "visible",
          vectorEffect: "none",
          strokeWidth: 7.5,
        }}
        id="path1"
      />
    </g>
  </svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const XIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 25 25"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const UserSignIn = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    className="icon flat-color"
    data-name="Flat Color"
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 6 6 0 0 1 6-6h6a6 6 0 0 1 6 6Zm-9-8a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z"
      style={{
        fill: "#000",
      }}
    />
  </svg>
);

export const ArrowSignUp = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 60 60"
    width={size || width}
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      className="fill-white"
      d="M15.563 40.836a.997.997 0 0 0 1.414 0l15-15a.999.999 0 0 0 0-1.414l-15-15a.999.999 0 1 0-1.414 1.414l14.293 14.293-14.293 14.293a.999.999 0 0 0 0 1.414z"
    />
  </svg>
);

export const VSCode = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 32 32"
    className="dark:fill-white fill-black dark:stroke-white stroke-black hover:fill-blue-500 hover:stroke-blue-500"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <path d="M21.0016 3.11679C21.0016 2.23783 20.0175 2.23782 19.5801 2.34769C20.1924 1.86426 20.9105 1.98147 21.1656 2.12796L27.079 5.02747C27.6424 5.30375 27.9998 5.8786 27.9998 6.50857V25.5831C27.9998 26.2215 27.6329 26.8025 27.058 27.0743L21.4937 29.7054C21.1109 29.8701 20.2799 30.2767 19.5801 29.7053C20.4549 29.8702 20.9287 29.2476 21.0016 28.8264V3.11679Z" />
      <path d="M19.6512 2.3319C20.1154 2.24017 21.0018 2.28271 21.0018 3.11685V9.68254L3.07359 23.2453C2.76022 23.4824 2.3192 23.443 2.05229 23.1542L0.204532 21.1548C-0.0849358 20.8416 -0.0646824 20.3513 0.249624 20.0633L19.5802 2.34775L19.6512 2.3319Z" />
      <path d="M21.0018 22.3708L3.07359 8.80801C2.76022 8.57094 2.3192 8.61028 2.05229 8.8991L0.204532 10.8985C-0.0849358 11.2117 -0.0646824 11.702 0.249624 11.9901L19.5802 29.7056C20.455 29.8704 20.9289 29.2478 21.0018 28.8266V22.3708Z" />
      <defs>
        <linearGradient
          id="paint0_linear_87_8101"
          x1={23.79}
          y1={2}
          x2={23.79}
          y2={30}
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_87_8101"
          x1={21.0018}
          y1={5.53398}
          x2={1.0217}
          y2={22.3051}
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={0.270551} />
          <stop offset={0.421376} />
          <stop offset={0.618197} />
          <stop offset={0.855344} />
          <stop offset={1} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_87_8101"
          x1={1.15522}
          y1={9.98389}
          x2={21.0791}
          y2={26.4808}
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} />
        </linearGradient>
      </defs>
    </g>
  </svg>
);

export const Python = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    className="dark:fill-white fill-black"
    width={size || width}
    height={size || height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <title>{"Python icon"}</title>
      <path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" />
    </g>
  </svg>
);

export const Terminal = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    className="dark:fill-white fill-black"
    width={size || width}
    height={size || height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM6.414 15.707 5 14.293 7.293 12 5 9.707l1.414-1.414L10.121 12l-3.707 3.707zM19 16h-7v-2h7v2z" />
    </g>
  </svg>
);

export const Game = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    className="dark:fill-white fill-black"
    width={size || width}
    height={size || height}
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 221.485 221.485"
    xmlSpace="preserve"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <path d="M220.728,168.956l-8.427-38.206c2.793-6.18,4.208-12.768,4.208-19.609c0-15.451-7.482-29.837-19.848-38.754v-4.24 c0-8.236-6.701-14.937-14.938-14.937H160.98c-6.569,0-12.161,4.262-14.156,10.167h-31.708V23.921c0-2.761-2.239-5-5-5s-5,2.239-5,5 v39.456H73.408c-1.995-5.904-7.587-10.167-14.156-10.167H38.508c-8.236,0-14.938,6.701-14.938,14.937v1.844 C8.988,78.569,0.053,94.064,0.053,111.141c0,8.696,2.341,17.137,6.789,24.545L0.763,163.25c-3.751,17.01,6.695,34.216,23.286,38.355 c2.549,0.636,5.162,0.958,7.764,0.958c14.833,0,27.921-10.526,31.12-25.03l5.099-23.117c7.208-3.366,13.414-8.448,18.166-14.878 h44.157c5.625,7.595,13.363,13.356,22.215,16.543l4.731,21.452c3.199,14.503,16.286,25.03,31.119,25.03h0 c2.125,0,4.262-0.215,6.36-0.641c8.642-0.139,16.104-3.593,21.063-9.764C220.903,185.86,222.638,177.62,220.728,168.956z M72.991,115.239c0,2.761-2.239,5-5,5H56.596v11.396c0,2.761-2.239,5-5,5h-9.584c-2.761,0-5-2.239-5-5v-11.396H25.616 c-2.761,0-5-2.239-5-5v-9.584c0-2.761,2.239-5,5-5h11.396V89.26c0-2.761,2.239-5,5-5h9.584c2.761,0,5,2.239,5,5v11.395h11.396 c2.761,0,5,2.239,5,5V115.239z M150.492,119.006c-5.142,0-9.326-4.183-9.326-9.325s4.184-9.326,9.326-9.326s9.326,4.184,9.326,9.326 S155.634,119.006,150.492,119.006z M169.67,138.184c-5.142,0-9.326-4.184-9.326-9.326c0-5.142,4.184-9.325,9.326-9.325 s9.325,4.183,9.325,9.325C178.995,134.001,174.812,138.184,169.67,138.184z M169.67,99.828c-5.142,0-9.326-4.184-9.326-9.326 s4.184-9.325,9.326-9.325s9.325,4.183,9.325,9.325S174.812,99.828,169.67,99.828z M188.848,119.006 c-5.142,0-9.325-4.183-9.325-9.325s4.183-9.326,9.325-9.326s9.326,4.184,9.326,9.326S193.99,119.006,188.848,119.006z" />
    </g>
  </svg>
);

export const PlayStore = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    className="dark:fill-white fill-black"
    width={size || width}
    height={size || height}
    viewBox="0 0 24 24"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <path d="m22.018 13.298-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065 3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
    </g>
  </svg>
);

export const Software = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <path d="M26.914,13.8V15.34H25.372v1.543h1.542v1.543h1.543V16.883H30V15.34H28.457V13.8Zm-3.5,0H21.87V15.34H20.327v1.543H21.87v1.543h1.543V16.883h1.543V15.34H23.413Zm-3.654,5.226a6.167,6.167,0,1,1-.04-6.118l5.39-3.1a12.384,12.384,0,1,0,.032,12.34Z" />
    </g>
  </svg>
);

export const Npm = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    className="dark:fill-white fill-black"
    width={size || width}
    height={size || height}
    viewBox="0 0 512 512"
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <rect x={227.6} y={213.1} width={28.4} height={57.1} />
      <path d="M0,156V327.4H142.2V356H256V327.4H512V156ZM142.2,298.9H113.8V213.2H85.3v85.7H28.4V184.6H142.2Zm142.2,0H227.5v28.6H170.6V184.6H284.4Zm199.2,0H455.2V213.2H426.8v85.7H398.4V213.2H370v85.7H313.1V184.6H483.8V298.9Z" />
    </g>
  </svg>
);

export const Multiplatform = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="dark:fill-white fill-black"
    width={size || width}
    height={size || height}
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fillRule="nonzero"
          d="M13.503 2.001l-10 10 3.083 3.083 13.08-13.083h-6.163zm-.006 9.198L8.122 16.62 13.494 22h6.189l-5.387-5.4 5.389-5.4h-6.188z"
        />
      </g>
    </g>
  </svg>
);
