import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getWeather } from "../../api";
import WeatherIcon from "../WeatherIcon";

export default function HourlyForecast() {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: "33.44", lon: "-94.04" }),
  });

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
      {data.hourly.map((hour) => (
        <div
          key={hour.dt}
          className="flex min-w-17.5 snap-start flex-col items-center gap-2 rounded-xl bg-zinc-900/40 p-3"
        >
          <p>
            {new Date(hour.dt * 1000).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </p>
          <WeatherIcon src={hour.weather[0].icon} />
          <p className="text-gray-500/90">{Math.round(hour.temp)}&#8457;</p>
        </div>
      ))}
    </Card>
  );
}
