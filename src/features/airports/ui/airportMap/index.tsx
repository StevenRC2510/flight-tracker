import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { Plane } from "lucide-react";

import { AirportMapProps } from "./types";

import "leaflet/dist/leaflet.css";

export default function AirportMap({ latitude, longitude }: AirportMapProps) {
  const position = [Number(latitude), Number(longitude)];
  console.log(position, "position");

  const ICON = L.icon({
    iconUrl: "/assets/images/plane.png",
    iconSize: [32, 32],
  });

  return (
    <div>
      {/* <div className="w-full h-96 rounded-lg overflow-hidden mb-4"> */}
      {/* <MapContainer
        center={[Number(latitude), Number(longitude)]}
        zoom={8}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[Number(latitude), Number(longitude)]}>
          <Popup>Ubicación del Aeropuerto</Popup>
        </Marker>
      </MapContainer> */}
      <MapContainer center={position} zoom={8} style={{ height: "500px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={position}
          // icon={L.divIcon({
          //   iconSize: [32, 32],
          //   iconAnchor: [32 / 2, 32 + 9],
          //   className: "mymarker",
          //   html: "😁",
          // })}
          icon={ICON}
        >
          <Popup>Ubicación del Aeropuerto</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
