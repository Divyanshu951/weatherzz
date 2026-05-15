import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import type { Coords } from "../types";

const API_KEY = import.meta.env.VITE_API_KEY;

type Props = {
  coords: Coords;
  onMapClick: (lat: number, lng: number) => void;
  mapType: string;
};

export default function Map({ coords, onMapClick, mapType }: Props) {
  const { lat, lng } = coords;
  return (
    <MapContainer
      className="z-0"
      center={[lat, lng]}
      zoom={18}
      style={{ height: "1000px", width: "1000px" }}
    >
      <MapClick onMapClick={onMapClick} coords={coords} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <TileLayer
        attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
        url={`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${API_KEY}`}
      />
      <Marker position={[lat, lng]} />
    </MapContainer>
  );
}

function MapClick({ onMapClick, coords }: Omit<Props, "mapType">) {
  const map = useMap();
  map.panTo([coords.lat, coords.lng]);

  map.on("click", (e) => {
    const { lat, lng } = e.latlng;
    onMapClick(lat, lng);
  });

  return null;
}
