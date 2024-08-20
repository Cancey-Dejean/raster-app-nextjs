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
