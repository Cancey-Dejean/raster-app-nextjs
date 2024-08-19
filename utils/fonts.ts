import localFont from "next/font/local";

export const rasterNeue = localFont({
  src: [
    {
      path: "../public/fonts/raster-neue.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-raster",
});
