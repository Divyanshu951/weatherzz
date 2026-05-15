import HourlyForecast from "./components/cards/HourlyForecast";
import DailyForecast from "./components/cards/DailyForecast";
import CurrentForecast from "./components/cards/CurrentForecast";
import AdditionalInfo from "./components/cards/AdditionalInfo";
import Map from "./components/Map";
import { useState } from "react";
import type { Coords } from "./types";
import LocationDropdown from "./components/dropdowns/LocationDropdown";
import { useQuery } from "@tanstack/react-query";
import { getGeoCode } from "./api";
import MapTypeDropDown from "./components/dropdowns/MapTypeDropdown";

function App() {
  const [coordinates, setCoords] = useState<Coords>({
    lat: 17.55949979389601,
    lng: 78.36547851562501,
  });
  const [location, setLocation] = useState("Tokyo");
  const [mapType, setMapType] = useState("clouds_new");

  const { data: geoCodeData } = useQuery({
    queryKey: ["geocode", location],
    queryFn: () => getGeoCode(location),
  });

  function onMapClick(lat: number, lng: number) {
    setCoords({ lat, lng });
    setLocation("custom");
  }

  const coords =
    location === "custom"
      ? coordinates
      : { lat: geoCodeData?.[0].lat ?? 0, lng: geoCodeData?.[0].lon ?? 0 };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-6">
        <LocationDropdown location={location} setLocation={setLocation} />
        <MapTypeDropDown mapType={mapType} setMapType={setMapType} />
      </div>
      <Map coords={coords} onMapClick={onMapClick} mapType={mapType} />
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
