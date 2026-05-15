import { AirPollutionSchema } from "./schemas/airPollutionSchema";
import { GeocodeSchema } from "./schemas/geocodeSchema";
import { WeatherSchema } from "./schemas/weatherSchema";

const API_KEY = import.meta.env.VITE_API_KEY;

export async function getWeather({ lat, lng }: { lat: number; lng: number }) {
  const res = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&units=imperial&exclude=minutely,alerts&appid=${API_KEY}`,
  );
  const data = await res.json();
  return WeatherSchema.parse(data);
}

export async function getGeoCode(location: string) {
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`,
  );
  const data = await res.json();
  return GeocodeSchema.parse(data);
}

export async function getAirPollution({
  lat,
  lng,
}: {
  lat: number;
  lng: number;
}) {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=${API_KEY}`,
  );
  const data = await res.json();
  return AirPollutionSchema.parse(data);
}
