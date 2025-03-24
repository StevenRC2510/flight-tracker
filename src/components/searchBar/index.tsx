import { Search } from "lucide-react";

import Button from "@/components/button";
import Input from "@/components/input";

import { SearchBarProps } from "./types";

export default function SearchBar({
  orientation = "vertical",
  searchTerm,
  setSearchTerm,
  onSearch,
  className = "",
  isLoading,
}: SearchBarProps) {
  const isVertical = orientation === "vertical";

  return (
    <div
      className={`w-full flex ${
        isVertical ? "flex-col gap-4  items-center" : "flex-row gap-2"
      } ${className}`}
    >
      <Input
        type="text"
        placeholder="Buscar aeropuertos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button
        onClick={onSearch}
        size="sm"
        className="w-36 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:bg-blue-700 rounded-xl"
        isLoading={isLoading}
      >
        <Search className="w-4 h-4" />
        Buscar
      </Button>
    </div>
  );
}
