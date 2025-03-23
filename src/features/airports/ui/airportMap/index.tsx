import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { AirportMapProps } from "./types";

export default function AirportMap({ latitude, longitude }: AirportMapProps) {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden mb-4">
      <MapContainer
        center={[latitude, longitude]}
        zoom={8}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[latitude, longitude]}>
          <Popup>Ubicación del Aeropuerto</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
