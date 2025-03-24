"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

import { useAirportStore } from "@/features/airports/state/airportStore";

import AirportCard from "@/features/airports/ui/airportCard";
import Pagination from "@/components/pagination";
import AirportListSkeleton from "@/features/airports/ui/airportListSkeleton";
import AirportListHeader from "@/features/airports/ui/airportList/components/airportListHeader";

import { usePagination } from "@/hooks/usePagination";
import { filterAirportsByName } from "@/features/airports/application/useCases/filterAirports";

import { AirportListProps } from "./types";

export default function AirportList({
  initialAirports,
  searchInitial,
}: AirportListProps) {
  const { data: airportsData, pagination } = initialAirports;
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    airports,
    currentPage,
    loading,
    totalPages,
    setInitialData,
    fetchAirports,
    setCurrentPage,
  } = useAirportStore();

  const itemsPerPage = pagination.limit;

  const [searchTerm, setSearchTerm] = useState(searchInitial);
  const [localPage, setLocalPage] = useState(1);

  useEffect(() => {
    setInitialData({
      airports: airportsData,
      totalItems: pagination.total,
      totalPages: Math.ceil(pagination.total / pagination.limit),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredAirports = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return filterAirportsByName(airports, searchTerm);
  }, [searchTerm, airports]);

  const isFiltering = searchTerm.trim().length > 0;

  const { totalPages: filteredTotalPages } = usePagination({
    totalItems: filteredAirports.length,
    itemsPerPage,
    currentPage: localPage,
  });

  const handleSearch = useCallback(async () => {
    if (!searchTerm.trim()) {
      await fetchAirports({ page: 1 });
      setCurrentPage(1);
      setLocalPage(1);
      router.replace("/airports");
      return;
    }

    setLocalPage(1);

    const params = new URLSearchParams(searchParams.toString());
    params.set("search", searchTerm);
    router.replace(`/airports?${params.toString()}`);
  }, [searchTerm, fetchAirports, setCurrentPage, router, searchParams]);

  const handlePageChange = useCallback(
    (newPage: number) => {
      if (isFiltering) {
        setLocalPage(newPage);
      } else {
        fetchAirports({ page: newPage });
      }
    },
    [isFiltering, fetchAirports]
  );

  const startIndex =
    (isFiltering ? localPage - 1 : currentPage - 1) * itemsPerPage;
  const visibleAirports = isFiltering
    ? filteredAirports.slice(startIndex, startIndex + itemsPerPage)
    : airports;

  return (
    <div className="p-8 relative">
      <AirportListHeader
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        onHandleSearch={handleSearch}
        isLoading={loading}
      />

      {loading ? (
        <AirportListSkeleton count={6} />
      ) : (
        <motion.div
          className="grid md:grid-cols-2 gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {visibleAirports.map((airport) => (
            <AirportCard key={airport.id} airport={airport} />
          ))}
        </motion.div>
      )}

      <Pagination
        page={isFiltering ? localPage : currentPage}
        setPage={handlePageChange}
        totalPages={isFiltering ? filteredTotalPages : totalPages}
      />
    </div>
  );
}
