import React from "react";
import Container from "../ui/container";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import ButtonGroup from "../ButtonGroup";

import { ButtonItem } from "@/types";

export default function Beta({
  highlightText,
  title,
  description,
  image,
  imageAlt,
  buttons,
}: {
  highlightText?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt?: string;
  buttons?: ButtonItem[];
}) {
  return (
    <section>
      <Container className="flex items-center gap-12">
        <div className="grow">
          <Link
            className="mb-4 inline-flex items-center gap-2 rounded-md border border-red/20 bg-red/10 px-3 py-1 text-sm font-medium text-white transition-colors duration-200 ease-in-out hover:bg-red/20 md:mb-6 lg:mb-8"
            href="/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red/90"></span>
              <span className="relative inline-flex size-2 rounded-full border border-red/70 bg-red/50"></span>
            </span>
            {highlightText}
          </Link>

          <h2 className="mb-8 text-4xl font-semibold text-white sm:text-6xl md:text-7xl">
            {title}
          </h2>

          <p>{description}</p>

          {/* <ButtonGroup buttons={buttons} /> */}

          <Button variant="secondary" className="mt-12" asChild>
            <Link href="/">Register</Link>
          </Button>
        </div>

        <Image
          src={image}
          alt={imageAlt || ""}
          width={711}
          height={585}
          className="mx-auto"
        />
      </Container>
    </section>
  );
}
