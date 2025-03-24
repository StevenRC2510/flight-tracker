"use client";

import Tabs from "@/components/tabs";
import GradientText from "@/components/gradientText";

import GeneralDetail from "./components/general";
import LocationDetail from "./components/location";
import StatisticsDetail from "./components/statistics";
import TimeZoneDetail from "./components/timeZone";

import { tabOptions } from "./constants";

import { AirportDetailProps } from "./types";

export default function AirportDetail({ airport }: AirportDetailProps) {
  if (!airport) {
    return <h2>Aeropuerto no encontrado</h2>;
  }

  const tabContent = {
    general: <GeneralDetail {...airport} />,
    ubicacion: <LocationDetail {...airport} />,
    zona: <TimeZoneDetail {...airport} />,
    estadisticas: <StatisticsDetail />,
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 z-10">
      <GradientText as="h1" className="text-center">
        {airport.airport_name}
      </GradientText>

      <Tabs options={tabOptions} content={tabContent} />
    </div>
  );
}
