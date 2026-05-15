import clsx from "clsx";

export default function Card({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "from-card to-card/60 flex size-full flex-col gap-4 rounded-xl bg-gradient-to-br p-4 shadow-md",
        className,
      )}
    >
      <h2 className="sticky left-0 text-2xl font-semibold">{title}</h2>
      <div className="size-full animate-[fade-in_0.6s_ease-out_forwards]">
        {children}
      </div>
    </div>
  );
}
