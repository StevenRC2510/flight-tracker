export interface AirportListHeaderProps {
  searchTerm: string;
  isLoading?: boolean;
  onSearch: (value: string) => void;
  onHandleSearch: () => void;
}
