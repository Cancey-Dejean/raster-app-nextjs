import Link from "next/link";
import { cn } from "@/lib/utils";
import { titleIcons } from "@/constants";
import ComingSoon from "../../comingSoon";
import { FeaturedGridItems } from "@/types";
import { ConnectionIcon, Cursor, FigmaIcon } from "../../svgIcons";
import CommandKey from "../../commandKey";
import TextPill from "../../comingSoon";

export const featureIcons = {
  cursor: <Cursor />,
  commandKey: <CommandKey text="⌘ + K" />,
  connectionIcon: <ConnectionIcon />,
  figmaIcon: <FigmaIcon />,
};

export default function CardFeature({
  icon,
  title = "Title",
  titleIcon,
  url,
  pillText,
  newTab,
}: {
  icon?: keyof typeof featureIcons;
  title?: string;
  titleIcon?: keyof typeof titleIcons;
  url?: string;
  newTab?: boolean;
  pillText?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 rounded-md bg-white/5 p-4 text-center transition-colors duration-300 ease-in-out",
        url && "hover:bg-white/10",
      )}
    >
      {pillText && <TextPill text={pillText} />}

      {icon && (
        <div className="flex h-10 flex-col items-center justify-center">
          {icon && featureIcons[icon]}
        </div>
      )}

      <div className="flex items-center gap-1.5">
        <h4 className="flex items-center gap-2 text-sm font-medium text-white">
          {titleIcon && <span>{titleIcons[titleIcon]}</span>}
          {title}
        </h4>
        {url && (
          <Link
            href={url}
            className="after:absolute after:inset-0"
            rel={
              newTab ? "noopener noreferrer external nofollow" : "noReferrer"
            }
          >
            →
          </Link>
        )}
      </div>
    </div>
  );
}
