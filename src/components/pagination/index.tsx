import Button from "@/components/button";

import { getPaginationRange } from "@/utils";

import { PaginationProps } from "./types";

export default function Pagination({
  page,
  setPage,
  totalPages,
}: PaginationProps) {
  const paginationRange = getPaginationRange(page, totalPages, 2);

  return (
    <div className="flex justify-center mt-10 gap-2 flex-wrap">
      <Button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="rounded-m"
        // className="px-4 py-2 bg-blue-600 rounded disabled:opacity-50"
      >
        Anterior
      </Button>

      {paginationRange.map((num, index) =>
        num === "..." ? (
          <span key={`dots-${index}`} className="px-3 py-2">
            ...
          </span>
        ) : (
          <Button
            key={num}
            onClick={() => setPage(Number(num))}
            className={`px-4 py-2 ${
              page === num ? "bg-blue-700" : "bg-blue-500"
            }`}
          >
            {num}
          </Button>
        )
      )}

      <Button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        // className="px-4 py-2 bg-blue-600 rounded disabled:opacity-50"
      >
        Siguiente
      </Button>
    </div>
  );
}
