import Image from "next/image";
import Container from "../ui/container";
import Link from "next/link";

const companies = [
  {
    url: "https://vercel.com",
    image: "/images/vercel.svg",
    alt: "Vercel",
  },
  {
    url: "https://www.macstadium.com/",
    image: "/images/mac-stadium.svg",
    alt: "MacStadium",
  },
  {
    url: "https://www.realthread.com/",
    image: "/images/real-thread.svg",
    alt: "Real Thread",
  },
  {
    url: "https://monogram.io/",
    image: "/images/monogram.svg",
    alt: "Monogram",
  },
  {
    url: "https://www.goodnature.com/",
    image: "/images/good-nature.svg",
    alt: "Good Nature",
  },
  {
    url: "https://backtrace.io/",
    image: "/images/backtrace.svg",
    alt: "Backtrace",
  },
  {
    url: "https://www.birchbox.com/",
    image: "/images/birchbox.svg",
    alt: "Birchbox",
  },
  {
    url: "https://www.hy-vee.com/",
    image: "/images/hy-vee.svg",
    alt: "Hy-Vee",
  },
  {
    url: "https://checklyhq.com/",
    image: "/images/checkly.svg",
    alt: "Checkly",
  },
  {
    url: "https://gohealthuc.com/",
    image: "/images/go-health.svg",
    alt: "Go Health",
  },
];

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
