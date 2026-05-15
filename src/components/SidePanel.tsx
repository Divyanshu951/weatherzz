import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { getAirPollution } from "../api";
import type { Coords } from "@/types";
import Card from "./cards/Card";

type Props = {
  coords: Coords;
};

export default function SidePanel(coords: Props) {
  return (
    <div className="bg-sidebar fixed top-0 right-0 z-1001 h-screen w-90 px-4 py-8 shadow-md">
      <Suspense>
        <AirPollution {...coords} />
      </Suspense>
    </div>
  );
}

function AirPollution({ coords }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["pollution"],
    queryFn: () => getAirPollution(coords),
  });

  // console.log(Object.entries(data.list[0].components));

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl">Air Pollution</h1>
        <h2 className="text-5xl font-semibold">{data.list[0].main.aqi}</h2>
        <h2 className="text-2xl">AQI</h2>
      </div>
      {Object.entries(data.list[0].components).map(([key, val]) => (
        <Card
          key={key}
          className="from-sidebar-accent to-sidebar-accent/60 transition-transform duration-300 hover:scale-105"
        >
          <div className="flex justify-between">
            <span className="text-lg font-bold capitalize">{key}</span>
            <span className="text-lh font-semibold">{val}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}
