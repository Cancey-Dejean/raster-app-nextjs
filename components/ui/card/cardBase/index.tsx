import { cn } from "@/lib/utils";
import Card from "..";
import { DashedS, Stars } from "../../svgIcons";
import Link from "next/link";
import TextPill from "../../comingSoon";
import { PillText } from "@/types";

export const cardIcons = {
  dashedS: <DashedS />,
  stars: <Stars />,
};

export const theme = {
  yellow: "text-yellow-500",
  purple: "text-purple-500",
};

export default function CardBase({
  reverse = false,
  image,
  description,
  linkUrl,
  linkText,
  icon,
  heading,
  highlightText,
  headingHighlightColor = "yellow",
  pillText,
}: {
  reverse?: boolean;
  image?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  icon?: keyof typeof cardIcons;
  heading?: string;
  headingHighlightColor?: keyof typeof theme;
  highlightText?: string;
  pillText?: PillText["text"];
}) {
  return (
    <Card className={cn("gap-6")}>
      <div className={cn("h-full px-12 py-16", image && "h-auto pb-0")}>
        <div
          className={cn(
            "flex h-full flex-col gap-4",
            reverse && "flex-col-reverse",
            image && "h-auto pb-0",
          )}
        >
          {pillText && <TextPill className="mb-auto" text={pillText} />}

          {icon && (
            <div className={cn(reverse ? "mt-auto" : "mb-auto")}>
              {icon && cardIcons[icon]}
            </div>
          )}

          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-semibold text-white">
              {heading}{" "}
              {highlightText && (
                <span className={cn(theme[headingHighlightColor])}>
                  {highlightText}
                </span>
              )}
            </h3>

            {description && <p>{description}</p>}

            {linkText && (
              <Link href={linkUrl || "/"} className="hover:text-red">
                {linkText} <span>→</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {image && (
        <div
          className="ml-12 mt-auto aspect-[4/3] bg-contain bg-right-bottom bg-no-repeat"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      )}
    </Card>
  );
}
