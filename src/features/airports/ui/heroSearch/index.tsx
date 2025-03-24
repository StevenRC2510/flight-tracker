"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import SearchBar from "@/components/searchBar";
import GradientText from "@/components/gradientText";

export default function HeroSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const query = searchTerm ? `?search=${searchTerm}` : "";
    router.push(`/airports${query}`);
  };

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
        <SearchBar
          orientation="vertical"
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
          className="mt-8"
        />
      </motion.div>
    </div>
  );
}
