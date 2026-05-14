import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getWeather } from "../../api";
import type { JSX } from "react";
import WeatherIcon from "../WeatherIcon";
import type { Coords } from "../../types";

type Props = {
  coords: Coords;
};

export default function DailyForecast({ coords }: Props): JSX.Element {
  const { data } = useSuspenseQuery({
    queryKey: ["weather", coords.lat, coords.lng],
    queryFn: () => getWeather({ lat: coords.lat, lng: coords.lng }),
  });

  return (
    <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
      {data?.daily.map((day) => (
        <div key={day.dt} className="flex justify-between">
          <p className="w-9">
            {new Date(day.dt * 1000).toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </p>

          <WeatherIcon src={day.weather[0].icon} />
          <p>{Math.round(day.temp.day)}&#8457;</p>
          <p className="text-gray-500/75">{Math.round(day.temp.min)}&#8457;</p>
          <p className="text-gray-500/75">{Math.round(day.temp.max)}&#8457;</p>
        </div>
      ))}
    </Card>
  );
}
