export interface PaginationProps {
  page: number;
  setPage: (currentPage: number) => void;
  totalPages: number;
  // pageNumbers: number[];
  // canGoPrevious: boolean;
  // canGoNext: boolean;
}
