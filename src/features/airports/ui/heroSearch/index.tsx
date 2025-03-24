"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

import Button from "@/components/button";
import GradientText from "@/components/gradientText";

export default function HeroSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => router.push(`/airports?search=${searchTerm}`);

  return (
    <div className="flex flex-col items-center pt-[15%] text-center px-4">
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg z-[1]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <GradientText as="span">SkyConnect Explorer</GradientText>
      </motion.h1>
      <motion.div
        className="flex flex-col gap-4 w-full max-w-xl z-[1] pt-[5%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <input
          type="text"
          placeholder="Buscar aeropuertos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 rounded-3xl flex-1 outline-none text-blue-700 bg-white"
        />
        <div className="w-full flex justify-center items-center">
          <Button
            onClick={handleSearch}
            className="w-36 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-md"
          >
            <Search className="w-4 h-4" />
            Buscar
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
