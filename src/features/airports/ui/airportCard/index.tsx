import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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
      onClick={handleClick}
      className="grid grid-cols-2 relative bg-gradient-to-r from-gray-800/80 via-gray-800/80 to-gray-900/80 rounded-lg cursor-pointer shadow-lg overflow-hidden border border-white h-56 "
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col justify-around p-4 flex-1 z-10 bg-gradient-to-r from-[#3F495F] to-[#0E1934]">
        <div>
          <h2 className="text-xl mb-2 font-semibold">{airport_name}</h2>
          <p className="text-xl mb-1 text-white">
            {city_iata_code}, {country_name}
          </p>
        </div>
        <span className="text-[42px] font-bold bg-gradient-to-r from-[#006AFF] to-[#00F9FF] bg-clip-text text-transparent">
          {iata_code}
        </span>
      </div>

      <div className="relative flex justify-end p-4 bg-cover bg-center bg-[url('/assets/images/card-background.jpeg')]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3F495F] via-[#1B253E] to-[#0E1934] opacity-95 z-0" />{" "}
        <Image
          className="absolute"
          src="/assets/images/plane.png"
          alt="plane-image"
          width={55}
          height={55}
        />
      </div>
    </motion.div>
  );
}
