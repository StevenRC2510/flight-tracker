"use client";

import { motion } from "framer-motion";

import { PaginationProps } from "./types";

export default function Pagination({ page, setPage }: PaginationProps) {
  return (
    <motion.div className="flex justify-center mt-10 gap-4">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-4 py-2 bg-blue-600 rounded disabled:opacity-50"
      >
        Anterior
      </button>

      {[1, 2, 3].map((num) => (
        <button
          key={num}
          onClick={() => setPage(num)}
          className={`px-4 py-2 rounded ${
            page === num ? "bg-blue-700" : "bg-blue-500"
          }`}
        >
          {num}
        </button>
      ))}

      <button
        onClick={() => setPage(page + 1)}
        className="px-4 py-2 bg-blue-600 rounded"
      >
        Siguiente
      </button>
    </motion.div>
  );
}
