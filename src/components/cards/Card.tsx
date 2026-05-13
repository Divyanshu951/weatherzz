import type { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
  childrenClassName?: string;
};

export default function Card({
  title,
  childrenClassName,
  children,
}: CardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-zinc-900 p-6 text-slate-50 shadow-md">
      <h2>{title}</h2>
      <div className={childrenClassName}>{children}</div>
    </div>
  );
}
