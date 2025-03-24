"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

import { useAirportStore } from "@/features/airports/state/airportStore";
import { usePagination } from "@/hooks/usePagination";

import Button from "@/components/button";
import Pagination from "@/components/pagination";
import GradientText from "@/components/gradientText";
import AirportCard from "@/features/airports/ui/airportCard";
import AirportListSkeleton from "@/features/airports/ui/airportListSkeleton";

import { AirportListProps } from "./types";

export default function AirportList({
  initialAirports,
  searchInitial,
}: AirportListProps) {
  console.log(initialAirports, "INITIAL AIRPORTS");
  const { airports, fetchAirports, loading } = useAirportStore();
  const [search, setSearch] = useState(searchInitial);
  const [page, setPage] = useState(1);
  const dataMerged = airports.length ? airports : initialAirports.data;

  const limit = initialAirports.pagination.limit;
  const totalItems = initialAirports.pagination.total;

  const { totalPages, pageNumbers, canGoPrevious, canGoNext } = usePagination({
    totalItems,
    itemsPerPage: limit,
    currentPage: page,
  });

  console.log(page, "PAGE");
  const handleSearch = async () => {
    // await fetchAirports(1, search);
    setPage(1);
  };

  useEffect(() => {
    fetchAirports({ page, search });
  }, [page]);

  if (!dataMerged.length) {
    return <p>No hay datos en tu búsqueda</p>;
  }

  return (
    <div className="p-8 relative">
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 items-center mb-8"
      >
        <GradientText className="text-5xl">SkyConnect Explorer</GradientText>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Buscar aeropuertos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 rounded-3xl flex-1 outline-none text-blue-700 bg-white"
          />
          <Button
            onClick={handleSearch}
            className="w-36 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-md"
          >
            <Search className="w-4 h-4" />
            Buscar
          </Button>
        </div>
      </motion.header>
      {loading ? (
        <AirportListSkeleton count={6} />
      ) : (
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
      )}

      <Pagination
        page={page}
        setPage={setPage}
        // pageNumbers={pageNumbers}
        totalPages={totalPages}
        // canGoNext={canGoNext}
        // canGoPrevious={canGoPrevious}
      />
    </div>
  );
}
