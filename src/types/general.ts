export type Pagination = {
  limit: number;
  offset: number;
  count: number;
  total: number;
};

export type PaginationApiResponse<T> = {
  pagination: Pagination;
  data: T;
};
