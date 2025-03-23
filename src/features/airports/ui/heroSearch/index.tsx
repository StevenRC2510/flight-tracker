"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HeroSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => router.push(`/airports?search=${searchTerm}`);

  return (
    <div
      className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundImage: `url('/airport-bg.jpg')` }}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Sky Connect Explorer</h1>
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row gap-4 w-full max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <input
          type="text"
          placeholder="Buscar aeropuertos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 rounded-full flex-1 outline-none text-gray-700 bg-white"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md"
        >
          Buscar
        </button>
      </motion.div>
    </div>
  );
}
