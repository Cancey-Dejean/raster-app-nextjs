import { cn } from "@/lib/utils";
import { SVGProps } from "react";

export const RasterLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="w-6"
      viewBox="0 0 24 24"
      fill="currentColor"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M0 3C0 1.34315 1.34315 0 3 0H11V11H0V3Z"></path>
      <path d="M13 0H18.5C21.5376 0 24 2.46243 24 5.5V5.5C24 8.53757 21.5376 11 18.5 11H13V0Z"></path>
      <path d="M0 13H11V24H3C1.34315 24 0 22.6569 0 21V13Z"></path>
      <path d="M13 13H18C21.3137 13 24 15.6863 24 19V24H13V13Z"></path>
    </svg>
  );
};

export const NewTabIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={cn("w-4", props.className)}
    >
      <path d="M7 17L17 7"></path>
      <path d="M7 7h10v10"></path>
    </svg>
  );
};
export const DashedS = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="83"
      height="92"
      fill="none"
      {...props}
    >
      <path
        className="dash-strokes stroke-yellow-500"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M46 1 1 55h40.5L37 91l45-54H41.5L46 1Z"
      ></path>
    </svg>
  );
};
export const Stars = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="101"
      height="103"
      fill="none"
      className="mb-auto text-purple-500"
      {...props}
    >
      <path
        fill="currentColor"
        d="M1.54 22.5a1 1 0 1 0 0 2v-2ZM24.79 1.25a1 1 0 1 0-2 0h2Zm-2 44.5a1 1 0 0 0 2 0h-2ZM46.04 24.5a1 1 0 1 0 0-2v2Zm-44.5 0c12.84 0 23.25-10.41 23.25-23.25h-2c0 11.736-9.514 21.25-21.25 21.25v2Zm23.25 21.25c0-12.84-10.41-23.25-23.25-23.25v2c11.736 0 21.25 9.514 21.25 21.25h2Zm0 0c0-11.736 9.514-21.25 21.25-21.25v-2c-12.84 0-23.25 10.41-23.25 23.25h2Zm-2-44.5c0 12.84 10.41 23.25 23.25 23.25v-2c-11.736 0-21.25-9.514-21.25-21.25h-2ZM20.79 61.75a1 1 0 0 0 0 2v-2ZM61.04 23.5a1 1 0 1 0-2 0h2Zm-2 78.5a1 1 0 0 0 2 0h-2Zm40.25-38.25a1 1 0 1 0 0-2v2Zm-78.5 0c22.23 0 40.25-18.02 40.25-40.25h-2c0 21.125-17.125 38.25-38.25 38.25v2ZM61.04 102c0-22.23-18.02-40.25-40.25-40.25v2c21.125 0 38.25 17.125 38.25 38.25h2Zm0 0c0-21.125 17.125-38.25 38.25-38.25v-2c-22.23 0-40.25 18.02-40.25 40.25h2Zm-2-78.5c0 22.23 18.02 40.25 40.25 40.25v-2c-21.125 0-38.25-17.125-38.25-38.25h-2Z"
      ></path>
    </svg>
  );
};
export const Cursor = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="h-10 rounded-md bg-yellow-500/10 p-2 text-yellow-500"
      fill="none"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="m4 4 16 5.333L12 12l-2.667 8L4 4Z"></path>
    </svg>
  );
};
export const ConnectionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="h-10 rounded-md bg-red/10 p-2 text-red"
      fill="none"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M9.12132 14.8787L14.8787 9.12132M10 17C10 18.6569 8.65685 20 7 20C5.34315 20 4 18.6569 4 17C4 15.3431 5.34315 14 7 14C8.65685 14 10 15.3431 10 17ZM20 7C20 8.65685 18.6569 10 17 10C15.3431 10 14 8.65685 14 7C14 5.34315 15.3431 4 17 4C18.6569 4 20 5.34315 20 7Z"></path>
    </svg>
  );
};
export const FigmaIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      viewBox="0 0 200 300"
      className="figma-icon h-6"
      {...props}
    >
      <title className="sr-only">Figma logo</title>
      <path
        id="path0_fill"
        className="st0"
        d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
      ></path>
      <path
        id="path1_fill"
        className="st1"
        d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
      ></path>
      <path
        id="path1_fill_1_"
        className="st2"
        d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
      ></path>
      <path
        id="path2_fill"
        className="st3"
        d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"
      ></path>
      <path
        id="path3_fill"
        className="st4"
        d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
      ></path>
    </svg>
  );
};
export const AppleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="w-3.5"
      fill="currentColor"
      shapeRendering="geometricPrecision"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M18.914 8.182c-.139.108-2.597 1.492-2.597 4.572 0 3.561 3.128 4.821 3.221 4.852-.014.077-.497 1.726-1.649 3.406-1.027 1.478-2.1 2.954-3.731 2.954-1.633 0-2.053-.948-3.936-.948-1.836 0-2.49.98-3.982.98-1.493 0-2.534-1.369-3.732-3.049C1.121 18.977 0 15.912 0 13.003c0-4.665 3.034-7.14 6.02-7.14 1.586 0 2.908 1.042 3.904 1.042.948 0 2.426-1.104 4.231-1.104.684 0 3.142.062 4.76 2.38Zm-5.616-4.356c.747-.886 1.275-2.115 1.275-3.344 0-.17-.015-.343-.046-.482-1.214.046-2.66.809-3.53 1.82-.684.777-1.323 2.006-1.323 3.251 0 .187.032.375.046.435.077.014.202.03.326.03 1.09 0 2.46-.729 3.252-1.71Z"></path>
    </svg>
  );
};
