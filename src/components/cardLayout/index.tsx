"use client";

import { motion } from "framer-motion";

import { CardLayoutProps } from "./types";

export default function CardLayout({
  leftContent,
  rightContent,
  onClick,
}: CardLayoutProps) {
  return (
    <motion.div
      className="grid grid-cols-2 relative bg-gradient-to-r from-gray-800/80 via-gray-800/80 to-gray-900/80 rounded-lg cursor-pointer shadow-lg overflow-hidden border border-white"
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      <div className="flex flex-col justify-around p-4 flex-1 z-10 bg-gradient-to-r from-[#3F495F] to-[#0E1934]">
        {leftContent}
      </div>

      <div className="relative flex justify-end p-4 bg-cover bg-center bg-[url('/assets/images/card-background.jpeg')]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3F495F] via-[#1B253E] to-[#0E1934] opacity-95 z-0" />
        <div className="relative z-10 flex items-center justify-center">
          {rightContent}
        </div>
      </div>
    </motion.div>
  );
}
