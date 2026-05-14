import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";
import Card from "./Card";
import Sunrise from "../../assets/sunrise.svg?react";
import Sunset from "../../assets/Sunset.svg?react";
import Cloud from "../../assets/Cloud.svg?react";
import Uv from "../../assets/Uv.svg?react";
import Wind from "../../assets/Wind.svg?react";
import Pressure from "../../assets/Pressure.svg?react";
import Uparrow from "../../assets/uparrow.svg?react";
import type { Coords } from "../../types";

type Props = {
  coords: Coords;
};

export default function AdditionalInfo({ coords }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather", coords.lat, coords.lng],
    queryFn: () => getWeather({ lat: coords.lat, lng: coords.lng }),
  });

  return (
    <Card
      title="Additional Weather info"
      childrenClassName="flex flex-col gap-8"
    >
      {rows.map(({ label, value, Icon }) => (
        <div className="flex justify-between" key={label}>
          <div className="flex gap-4">
            <span className="text-gray-500">{label}</span>
            <Icon className="size-8 invert" />
          </div>

          <span>
            <FormatComponent value={value} number={data.current[value]} />
          </span>
        </div>
      ))}
    </Card>
  );
}

function FormatComponent({ value, number }: { value: string; number: number }) {
  if (value === "sunrise" || value === "sunset")
    return new Date(number * 1000).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

  if (value === "wind_deg")
    return (
      <Uparrow
        className="size-8 invert"
        style={{ transform: `rotate(${number}deg)` }}
      />
    );

  return number;
}

const rows = [
  {
    label: "Cloudiness (%)",
    value: "clouds",
    Icon: Cloud,
  },
  {
    label: "UV Index",
    value: "uvi",
    Icon: Uv,
  },
  {
    label: "Wind Direction",
    value: "wind_deg",
    Icon: Wind,
  },
  {
    label: "Pressure (hPa)",
    value: "pressure",
    Icon: Pressure,
  },
  {
    label: "Sunrise",
    value: "sunrise",
    Icon: Sunrise,
  },
  {
    label: "Sunset",
    value: "sunset",
    Icon: Sunset,
  },
] as const;
