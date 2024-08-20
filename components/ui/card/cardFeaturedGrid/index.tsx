import React from "react";
import Card from "..";

const items = [
  {
    title: "Title 1",
  },
];

export default function CardFeaturedGrid({
  heading,
  items,
}: {
  heading?: string;
  items?: any;
}) {
  return (
    <Card className="gap-16 px-12 py-16">
      <h3 className="text-3xl font-semibold text-white">
        Powerful features to get ship done
      </h3>

      <div className="grid h-full grid-cols-3 gap-6">Hello</div>
    </Card>
  );
}
