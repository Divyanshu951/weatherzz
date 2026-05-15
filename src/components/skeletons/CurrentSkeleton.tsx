import Card from "../cards/Card";
import { Skeleton } from "../ui/skeleton";

export default function CurrentSkeleton() {
  return (
    <Card title="Current Forecast" childrenClassName="">
      <div className="flex flex-col items-center gap-6">
        <Skeleton className="h-15 w-53" />
        <Skeleton className="size-14 rounded-full" />
        <Skeleton className="h-7 w-30 rounded-full" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-xl">Local time:</p>
        <Skeleton className="h-10 w-40 rounded-full" />
      </div>
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-gray-500">Feels Like</p>
          <Skeleton className="h-6 w-30 rounded-xl" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-500">Humidity</p>
          <Skeleton className="h-6 w-30 rounded-xl" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-500">Wind speed</p>
          <Skeleton className="h-6 w-30 rounded-xl" />
        </div>
      </div>
    </Card>
  );
}
