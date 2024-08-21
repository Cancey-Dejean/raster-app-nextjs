export default function CommandKey({ text }: { text: string }) {
  return (
    <div
      aria-hidden="true"
      className="flex h-10 items-center justify-center rounded-md bg-purple-500/10 px-3 text-sm font-medium text-purple-500"
    >
      {text}
    </div>
  );
}
