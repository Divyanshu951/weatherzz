import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import type { Coords } from "../types";

type Props = {
  coords: Coords;
  onMapClick: (lat: number, lng: number) => void;
};

export default function Map({ coords, onMapClick }: Props) {
  const { lat, lng } = coords;
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={18}
      style={{ height: "1000px", width: "1000px" }}
    >
      <MapClick onMapClick={onMapClick} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

function MapClick({ onMapClick }: Omit<Props, "coords">) {
  const map = useMap();

  map.on("click", (e) => {
    const { lat, lng } = e.latlng;
    map.panTo([lat, lng]);
    onMapClick(lat, lng);
  });

  return null;
}
