import { cn } from "@/lib/utils";

export default function ContentVideoImage({
  name,
  title,
  description,
  video,
  number,
  className,
  ...props
}: {
  number?: number;
  name?: string | undefined;
  title?: string;
  description?: string;
  video?: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("py-12", className)} {...props}>
      <div>
        <h3 className="mb-4 flex items-center gap-4 text-xl text-white">
          <span className="flex size-[46px] items-center justify-center rounded-full border border-red">
            {number}
          </span>
          <span>{name}</span>
        </h3>

        <h4 className="mb-4 text-2xl text-white md:text-4xl">{title}</h4>

        <p className="mb-12 max-w-[60ch] text-base">{description}</p>

        <div className="aspect-video overflow-hidden rounded-lg">
          <video
            src={video || "/videos/placeholder.mp4"}
            autoPlay
            muted
            loop
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
