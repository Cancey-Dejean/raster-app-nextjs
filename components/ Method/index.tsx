import { PillText } from "@/types";
import TextPill from "../ui/comingSoon";
import Container from "../ui/container";
import ContentVideoImage from "../ContentVideoImage";

const methodSteps = [
  {
    name: "Organize",
    title: "AI-driven organization",
    description:
      "Folders are so 1993. Raster's out of the box, class-leading AI organizes your images with smart tags and makes it easier to store and find your digital assets. Customize your tags and create the ultimate organization system and workflow.",
    video: "/videos/raster_organize.mp4",
  },
  {
    name: "Edit",
    title: "Nondestructive, collaborative editing",
    description:
      'Was "IMG_3612_final.jpg" the approved version? Or was it "IMG_3612_final2.jpg"? Where\'s the original? File-based image storage solutions like Dropbox or Google Drive are not suited for photo workflows. Stop downloading, editing, and uploading infinite versions, and edit them in Raster.',
    video: "/videos/raster_edit.mp4",
  },
  {
    name: "Ship",
    title: "Set up once. Ship forever.",
    description:
      "Shipping Raster may be more than just a DAM, but it's also a very good DAM. Powered by our in-house CDN built on AWS and Vercel, Raster is backed by technology that serves billions of images a day. Nothing is faster than Raster.",
    video: "/videos/raster_ship.mp4",
  },
];

export default function Method({ pillText }: { pillText?: PillText["text"] }) {
  return (
    <section>
      <Container className="flex items-start gap-6">
        <div className="w-1/3 md:sticky md:top-24 md:pr-1">
          <h2 className="mb-6 max-w-[300px] text-4xl font-semibold text-white md:text-5xl">
            Meet the Raster Method.
          </h2>

          <p className="max-w-[280px]">
            The Raster method reduces time to ship photography and removes
            friction across marketing, design, and engineering teams, distilling
            a 25-minute process into a 30-second one.
          </p>

          {pillText && <TextPill className="mt-8" text={pillText} />}
        </div>

        <div className="flex flex-col gap-8 space-y-12 divide-y divide-white/20 md:w-2/3">
          {methodSteps.map(({ ...step }, index) => (
            <ContentVideoImage
              key={index}
              {...step}
              number={index + 1}
              className="pt-12"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
