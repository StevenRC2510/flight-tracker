"use client";
import { useEffect } from "react";

import { Airport } from "@/features/airports/domain/airport";
import { useAirportStore } from "@/features/airports/state/airportStore";

import AirportDetail from "@/features/airports/ui/airportDetail";

type AirportDetailManageProps = {
  airport: Airport;
};
export default function AirportDetailManage({
  airport,
}: AirportDetailManageProps) {
  const selectedAirport = useAirportStore((state) => state.selectedAirport);
  const setSelectedAirport = useAirportStore(
    (state) => state.setSelectedAirport
  );

  useEffect(() => {
    if (!selectedAirport) {
      setSelectedAirport(airport);
    }
  }, [selectedAirport, airport, setSelectedAirport]);

  return <AirportDetail airport={selectedAirport || airport} />;
}
