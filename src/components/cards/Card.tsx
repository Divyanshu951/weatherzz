import clsx from "clsx";
import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
  childrenClassName?: string;
  className?: string;
};

export default function Card({
  title,
  childrenClassName,
  children,
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        "from-card to-card/60 flex flex-col gap-4 rounded-xl bg-linear-to-br p-6 text-slate-50 shadow-md",
        className,
      )}
    >
      <h2>{title}</h2>
      <div
        className={clsx(
          childrenClassName,
          "animate-[fade-in_1s_ease-out_forwards]",
        )}
      >
        {children}
      </div>
    </div>
  );
}
