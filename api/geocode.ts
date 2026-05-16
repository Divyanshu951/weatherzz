import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  const { location, limit = 1 } = req.query;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${limit}&appid=${process.env.OPENWEATHER_API_KEY}`,
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch geocode" });
  }
}