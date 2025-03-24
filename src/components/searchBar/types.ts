export interface SearchBarProps {
  orientation?: "vertical" | "horizontal";
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  onSearch: () => void;
  className?: string;
  isLoading?: boolean;
}
