import React from "react";
import Card from "..";
import { cardSizes } from "@/constants";
import { cn } from "@/lib/utils";
import { ImageCard } from "@/types";

export default function CardImage({ image, size = "full" }: ImageCard) {
  return (
    <Card
      className={cn(
        "aspect-[3/4] h-full border-transparent bg-cover bg-center",
        cardSizes[size],
      )}
      style={{
        backgroundImage: `url(${image || "https://dummyimage.com/774x1036.png/ff2e66/dddddd"})`,
      }}
    ></Card>
  );
}
