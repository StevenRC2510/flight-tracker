"use client";

import { useState } from "react";

import AirportMap from "@/features/airports/ui/airportMap";

import { AirportDetailProps } from "./types";

export default function AirportDetail({ airport }: AirportDetailProps) {
  const [tab, setTab] = useState("general");

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">{airport.airport_name}</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-8">
        {["General", "Ubicación", "Zona Horaria", "Estadísticas"].map(
          (label) => (
            <button
              key={label}
              onClick={() => setTab(label.toLowerCase())}
              className={`px-4 py-2 rounded ${
                tab === label.toLowerCase() ? "bg-blue-600" : "bg-gray-700"
              }`}
            >
              {label}
            </button>
          )
        )}
      </div>

      {/* Tab content */}
      {tab === "general" && (
        <div className="mb-6">
          <p className="mb-2">Código IATA: {airport.iata_code}</p>
          <p className="mb-2">Código ICAO: {airport.icao_code}</p>
          <p className="mb-2">Ciudad: {airport.city_iata_code}</p>
          <p className="mb-2">País: {airport.country_name}</p>
        </div>
      )}

      {tab === "ubicación" && (
        <div className="mb-6 bg-gray-800 p-4 rounded-lg">
          <p>Latitud: {airport.latitude}</p>
          <p>Longitud: {airport.longitude}</p>
          <AirportMap
            latitude={airport.latitude}
            longitude={airport.longitude}
          />
        </div>
      )}

      {tab === "zona horaria" && (
        <div className="mb-6 bg-gray-800 p-4 rounded-lg">
          <p>Zona Horaria: {airport.timezone}</p>
        </div>
      )}

      {tab === "estadísticas" && (
        <div className="mb-6 bg-gray-800 p-4 rounded-lg">
          <p>No disponible (opcional agregar si tienes data).</p>
        </div>
      )}
    </div>
  );
}
