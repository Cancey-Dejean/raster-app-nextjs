import { cn } from "@/lib/utils";
import { SVGProps } from "react";
import { twMerge } from "tailwind-merge";

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
