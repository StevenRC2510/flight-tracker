import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import { PlaneIcon } from "lucide-react";

import { useAirportStore } from "@/features/airports/state/airportStore";

import { AirportCardProps } from "./types";

export default function AirportCard({ airport }: AirportCardProps) {
  const router = useRouter();
  const setSelectedAirport = useAirportStore(
    (state) => state.setSelectedAirport
  );

  const { airport_name, city_iata_code, country_name, iata_code } = airport;

  const handleClick = () => {
    setSelectedAirport(airport);
    router.push(`/airports/${airport.id}`);
  };

  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-6 relative shadow-lg cursor-pointer"
      whileHover={{ scale: 1.02 }}
      onClick={handleClick}
    >
      <h2 className="text-lg font-semibold mb-2">{airport_name}</h2>
      <p className="text-sm mb-1">
        {city_iata_code}, {country_name}
      </p>
      <span className="text-3xl text-blue-300 font-bold">{iata_code}</span>
      <PlaneIcon className="absolute top-4 right-4 text-blue-400" />
    </motion.div>
  );
}
