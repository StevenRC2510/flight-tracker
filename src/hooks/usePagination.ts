import { useMemo } from "react";

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  siblingCount?: number;
}

export function usePagination({
  totalItems,
  itemsPerPage,
  currentPage,
}: UsePaginationProps) {
  const totalPages = useMemo(() => {
    return Math.ceil(totalItems / itemsPerPage);
  }, [totalItems, itemsPerPage]);

  const pageNumbers = useMemo(() => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }, [totalPages]);

  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return {
    totalPages,
    pageNumbers,
    canGoPrevious,
    canGoNext,
  };
}
