import Image from "next/image";
import Container from "../ui/container";
import Link from "next/link";
import { companies } from "@/lib/dummyData";

export default function SocialProof() {
  return (
    <section className="border-y border-y-white/10">
      <Container className="flex flex-col gap-16">
        <h2 className="text-3xl font-semibold text-white">
          Trusted by growing teams around the globe
        </h2>

        <div className="grid grid-cols-5 gap-4">
          {companies.map(({ url, image, alt }, index) => (
            <div className="group relative" key={index}>
              <Image
                src={image}
                alt={alt}
                width={250}
                height={75}
                className="opacity-50 transition-opacity duration-300 group-hover:opacity-70"
              />

              {url && (
                <Link href={url} className="after:absolute after:inset-0" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
