import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import type { Coords } from "../types";
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";
import { useEffect } from "react";

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
      style={{ height: "1000px", width: "100%" }}
    >
      <MapClick onMapClick={onMapClick} coords={coords} />
      <MapTileLayer />
      <TileLayer
        attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
        url={`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${API_KEY}`}
        opacity={0.7}
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

function MapTileLayer() {
  const map = useMap();

  useEffect(() => {
    const tileLayer = new MaptilerLayer({
      style: "basic-dark",
      apiKey: "P6NExgpEucds8A4bqwAP",
    });
    tileLayer.addTo(map);

    return () => {
      map.removeLayer(tileLayer);
    };
  }, []);

  return null;
}
