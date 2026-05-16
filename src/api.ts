import { AirPollutionSchema, GeocodeSchema, WeatherDataSchema } from "./types";

// const API_KEY = import.meta.env.VITE_API_KEY;

export async function getWeather({ lat, lon }: { lat: number; lon: number }) {
 const res = await fetch(
  `/api/weather?lat=${lat}&lon=${lon}`,
);
  const data = await res.json();
  return WeatherDataSchema.parse(data);
}

export async function getGeocode({
  location,
  limit = 1,
}: {
  location: string;
  limit?: number;
}) {
  const res = await fetch(
  `/api/geocode?location=${location}&limit=${limit}`,
);
  const data = await res.json();
  return GeocodeSchema.parse(data);
}

export async function getAirPollution({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}) {
  const res = await fetch(
  `/api/airpollution?lat=${lat}&lon=${lon}`,
);
  const data = await res.json();
  return AirPollutionSchema.parse(data);
}
