import React from "react";
import Card from "..";
import CardFeature from "../cardFeature";

export default function CardFeaturedGrid({
  heading,
  items,
}: {
  heading?: string;
  items?: any;
}) {
  return (
    <Card className="gap-16 px-12 py-16">
      <h3 className="text-3xl font-semibold text-white">{heading}</h3>

      <div className="grid h-full grid-cols-3 gap-6">
        <CardFeature pillText="Coming Soon" title="AI-powered Editor" />
        <CardFeature icon="cursor" title="Realtime collaboration" />
        <CardFeature icon="commandKey" title="Command palette" />
        <CardFeature
          icon="connectionIcon"
          url="/#palette"
          title="Growing API"
        />
        <CardFeature icon="figmaIcon" title="Figma Plugin" url="/#figma" />

        <CardFeature pillText="Coming soon" title="Mac App" titleIcon="apple" />
      </div>
    </Card>
  );
}
