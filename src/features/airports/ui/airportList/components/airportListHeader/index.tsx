"use client";

import { motion } from "framer-motion";

import SearchBar from "@/components/searchBar";
import GradientText from "@/components/gradientText";

import { AirportListHeaderProps } from "./types";

export default function AirportListHeader({
  searchTerm,
  onSearch,
  onHandleSearch,
  isLoading,
}: AirportListHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-2 items-center w-full"
    >
      <GradientText className="text-5xl">SkyConnect Explorer</GradientText>
      <SearchBar
        orientation="horizontal"
        searchTerm={searchTerm}
        setSearchTerm={onSearch}
        onSearch={onHandleSearch}
        isLoading={isLoading}
      />
    </motion.header>
  );
}
