import { cardSizes } from "@/constants";
import { cn } from "@/lib/utils";
import { CardSize } from "@/types";

export default function Card({
  className,
  children,
  ...props
}: {
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-gray/10",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
