import Image from "next/image";
import Container from "../ui/container";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <Container className="flex items-center gap-12">
        <div className="grow">
          <div className="relative mb-6 h-[44px] w-full max-w-[200px]">
            <Image
              src="/images/product-hunt.svg"
              alt="Raster - Next-gen, AI-powered digital asset manager for modern teams | Product Hunt"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="flex w-full max-w-[550px] flex-col gap-8">
            <h1 className="text-4xl font-semibold text-white md:text-6xl lg:text-7xl xl:text-8xl">
              Photography Management
              <a href="/" className="block text-red">
                → The Future
              </a>
            </h1>

            <p className="text-lg">
              Raster is a digital asset manager for modern teams, saving time
              organizing, editing, and hosting photography.
            </p>
          </div>

          <Button className="mt-12" asChild>
            <Link href="/">Get Started</Link>
          </Button>
        </div>

        <div className="relative h-[597px] w-full max-w-[516px]">
          <Image
            src="/images/hero-img.png"
            alt="Raster - Next-gen, AI-powered digital asset manager for modern teams | Product Hunt"
            fill
            priority
            className="object-contain"
          />
        </div>
      </Container>
    </section>
  );
}
