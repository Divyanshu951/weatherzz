import Card from "../cards/Card";
import { Skeleton } from "../ui/skeleton";

export default function AdditionalInfoSkeleton() {
  return (
    <Card
      title="Additional Weather info"
      childrenClassName="flex flex-col gap-8"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <div className="flex justify-between" key={index}>
          <div className="flex gap-4">
            <Skeleton className="h-8 w-18" />
            <Skeleton className="size-8" />
          </div>

          <span>
            <Skeleton className="h-8 w-10" />
          </span>
        </div>
      ))}
    </Card>
  );
}
