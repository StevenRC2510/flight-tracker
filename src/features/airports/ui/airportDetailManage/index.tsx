"use client";

import { useAirportStore } from "@/features/airports/state/airportStore";

import AirportDetail from "@/features/airports/ui/airportDetail";

export default function AirportDetailManage() {
  const selectedAirport = useAirportStore((state) => state.selectedAirport);

  return <AirportDetail airport={selectedAirport} />;
}
