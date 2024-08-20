import { cn } from "@/lib/utils";

const containerSizes = {
  base: "max-w-[1280px]",
  contained: "max-w-[1170px]",
  compact: "max-w-[900px]",
};

export default function Container({
  children,
  size = "base",
  className,
  ...props
}: {
  size?: "base" | "contained" | "compact";
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full", containerSizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
