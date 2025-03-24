import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { AirportMapProps } from "./types";

import "leaflet/dist/leaflet.css";

export default function AirportMap({ latitude, longitude }: AirportMapProps) {
  const position: [number, number] = [Number(latitude), Number(longitude)];

  const ICON = L.icon({
    iconUrl: "/assets/images/plane.png",
    iconSize: [32, 32],
  });

  return (
    <div>
      <MapContainer center={position} zoom={8} className="h-[500px]">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={ICON}>
          <Popup>Ubicación del Aeropuerto</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
