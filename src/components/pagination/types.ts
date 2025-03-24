export interface PaginationProps {
  page: number;
  setPage: (currentPage: number) => void;
  totalPages: number;
}
