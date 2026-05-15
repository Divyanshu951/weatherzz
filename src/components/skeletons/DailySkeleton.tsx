import Card from "../cards/Card";
import { Skeleton } from "../ui/skeleton";

export default function DailySkeleton() {
  return (
    <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="flex justify-between">
          <Skeleton className="h-8 w-9" />
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      ))}
    </Card>
  );
}
