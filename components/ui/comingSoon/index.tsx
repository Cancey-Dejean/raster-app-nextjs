import { cn } from "@/lib/utils";

export default function TextPill({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={cn("flex h-10 items-center", className)}>
      <span className="rounded-md border border-white/20 px-3 py-1 text-xs font-medium text-white">
        {text}
      </span>
    </div>
  );
}
