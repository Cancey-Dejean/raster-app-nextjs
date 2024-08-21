import { twMerge } from "tailwind-merge";
import Container from "../ui/container";
import CardImage from "../ui/card/cardImage";
import CardFeaturedGrid from "../ui/card/cardFeaturedGrid";
import CardBase from "../ui/card/cardBase";

export default function SectionGrid() {
  return (
    <section>
      <Container>
        <h2 className="mb-20 max-w-[500px] text-2xl font-semibold text-white md:text-6xl">
          A photo manager unlike any other.
        </h2>

        {/* Three columns */}
        <div className={twMerge("grid grid-cols-3 gap-6")}>
          <div className="col-span-1 col-start-1">
            <CardBase
              heading="Raster is"
              highlightText="faster."
              icon="dashedS"
              reverse
              description="Not only is Raster the fastest DAM on the planet, it has smart
            features so your team performs faster too."
            />
          </div>

          <div className="col-span-1 col-start-2">
            <CardBase
              image="/images/screenshare.png"
              heading="Beautiful design inspires our best work."
              description="Raster’s user experience is built for teams that ship. No other DAM even comes close."
              linkText="Raster Design System"
              linkUrl="/"
            />
          </div>

          <div className="col-span-1 col-start-3">
            <CardImage image="/images/sky.jpeg" />
          </div>

          <div className="col-span-1 col-start-1">
            <CardImage image="/images/card-img.jpeg" />
          </div>

          <div className="col-span-2 col-start-2">
            <CardFeaturedGrid heading="Powerful features to get ship done" />
          </div>

          <div className="col-span-1 col-start-1">
            <CardBase
              pillText="Shipping August 2023"
              heading="Deploy once. Ship forever."
              description="Deploy a unique Raster image URL and edit the image in post — even after it's been shipped."
            />
          </div>

          <div className="col-span-1 col-start-2">
            <CardImage image="/images/cave.jpeg" />
          </div>

          <div className="col-span-1 col-start-3">
            <CardBase
              heading="Powered by"
              highlightText="faster."
              icon="stars"
              headingHighlightColor="purple"
              description="Not only is Raster the fastest DAM on the planet, it has smart features so your team performs faster too."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
