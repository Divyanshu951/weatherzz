import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";
import Card from "./Card";
import WeatherIcon from "../WeatherIcon";
import type { Coords } from "../../types";

type Props = {
  coords: Coords;
};

export default function CurrentForecast({ coords }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather", coords.lat, coords.lng],
    queryFn: () => getWeather({ lat: coords.lat, lng: coords.lng }),
  });

  const localTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: data.timezone,
  }).format(new Date());

  return (
    <Card title="Current Forecast" childrenClassName="">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-center text-6xl font-semibold">
          {data.current.temp}°F
        </h2>
        <WeatherIcon src={data.current.weather[0].icon} className="size-14" />
        <h3 className="text-xl capitalize">
          {data.current.weather[0].description}
        </h3>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-xl">Local time:</p>
        <h1 className="text-4xl font-semibold">{localTime}</h1>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-gray-500">Feels Like</p>
          <p>{Math.round(data.current.feels_like)}&#8457;</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-500">Humidity</p>
          <p>{data.current.humidity}%</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-500">Wind speed</p>
          <p>{data.current.wind_speed} mph</p>
        </div>
      </div>
    </Card>
  );
}
