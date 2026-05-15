import Card from "../cards/Card";
import { Skeleton } from "../ui/skeleton";

export default function HourlySkeleton() {
  return (
    <Card
      title="Hourly Forecast (48 Hours)"
      childrenClassName="
      flex gap-4 overflow-x-auto
      scroll-smooth
      snap-x snap-mandatory
      pb-2
      scrollbar-thin
      scrollbar-track-transparent
      scrollbar-thumb-zinc-600
      hover:scrollbar-thumb-zinc-500
    "
    >
      {Array.from({ length: 48 }).map((_, index) => (
        <div
          key={index}
          className="flex min-w-17.5 snap-start flex-col items-center gap-2 rounded-xl bg-zinc-900/40 p-3"
        >
          <Skeleton className="h-6 w-10" />
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="h-6 w-9" />
        </div>
      ))}
    </Card>
  );
}
