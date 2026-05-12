import type { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
};

export default function Card({ title, children }: CardProps) {
  console.log(children);

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-zinc-900 p-4 text-slate-50 shadow-md">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
