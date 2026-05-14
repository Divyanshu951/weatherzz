import HourlyForecast from "./components/cards/HourlyForecast";
import DailyForecast from "./components/cards/DailyForecast";
import CurrentForecast from "./components/cards/CurrentForecast";
import AdditionalInfo from "./components/cards/AdditionalInfo";
import Map from "./components/Map";
import { useState } from "react";
import type { Coords } from "./types";

function App() {
  const [coords, setCoords] = useState<Coords>({
    lat: 17.55949979389601,
    lng: 78.36547851562501,
  });

  function onMapClick(lat: number, lng: number) {
    setCoords({ lat, lng });
  }

  console.log(coords);

  return (
    <div className="flex flex-col gap-8">
      <Map coords={coords} onMapClick={onMapClick} />
      <CurrentForecast coords={coords} />
      <HourlyForecast coords={coords} />
      <DailyForecast coords={coords} />
      <AdditionalInfo coords={coords} />
    </div>
  );
}

export default App;

// Tailwind
// data fetching - tanstack query
