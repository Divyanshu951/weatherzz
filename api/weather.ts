import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  const { lat, lon } = req.query;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.OPENWEATHER_API_KEY}`,
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch weather" });
  }
}