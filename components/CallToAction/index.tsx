import Link from "next/link";
import { Button } from "../ui/button";
import Container from "../ui/container";
import { ButtonItem } from "@/types";
import { buttons } from "@/lib/dummyData";
import ButtonGroup from "../ButtonGroup";

export default function CallToAction({
  title,
  description,
  buttons = [],
}: {
  title?: string;
  description?: string;
  buttons?: ButtonItem[];
}) {
  return (
    <section
      className="bg-cover bg-center py-[84px] text-center"
      style={{ backgroundImage: "url('/images/cta-bg.webp')" }}
    >
      <Container>
        <div className="mb-12 flex flex-col gap-5">
          <h2 className="text-4xl text-white sm:text-5xl md:text-6xl">
            {title}
          </h2>
          <p className="mx-auto max-w-md text-center text-gray-300 mix-blend-color-dodge">
            {description}
          </p>
        </div>

        <div className="flex justify-center">
          <ButtonGroup buttons={buttons} />
        </div>
      </Container>
    </section>
  );
}
