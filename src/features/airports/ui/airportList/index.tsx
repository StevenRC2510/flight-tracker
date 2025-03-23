"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// import { useAirportStore } from "@/features/airports/state/airportStore";

import Pagination from "@/components/pagination";
import AirportCard from "@/features/airports/ui/airportCard";

import { AirportListProps } from "./types";

import { Airport } from "../../domain/airport";

export default function AirportList({
  initialAirports,
  searchInitial,
}: AirportListProps) {
  console.log(initialAirports, "INITIAL AIRPORTS");
  // const { airports, fetchAirports } = useAirportStore();
  const airports: Airport[] = [];
  const [search, setSearch] = useState(searchInitial);
  const [page, setPage] = useState(1);
  const dataMerged = airports.length ? airports : initialAirports.data;

  const handleSearch = async () => {
    // await fetchAirports(1, search);
    setPage(1);
  };

  if (!dataMerged.length) {
    return <p>No hay datos en tu búsqueda</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 relative">
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-between items-center mb-8"
      >
        <p className="text-3xl font-bold text-blue-400">SkyConnect Explorer</p>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Buscar aeropuertos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 rounded-full text-gray-700 bg-white"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full"
          >
            Buscar
          </button>
        </div>
      </motion.header>

      <motion.div
        className="grid md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {dataMerged.map((airport) => (
          <AirportCard key={airport.id} airport={airport} />
        ))}
      </motion.div>

      <Pagination page={page} setPage={setPage} />
    </div>
  );
}
