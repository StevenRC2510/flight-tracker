import {
  Airport,
  fetchAirportsParams,
} from "@/features/airports/domain/airport";

export interface InitialData {
  airports: Airport[];
  totalItems: number;
  totalPages: number;
}

export interface AirportState {
  airports: Airport[];
  selectedAirport: Airport | null;
  loading: boolean;
  currentPage: number;
  totalItems: number;
  totalPages: number;
  fetchAirports: (params: fetchAirportsParams) => Promise<void>;
  setSelectedAirport: (airport: Airport) => void;
  setInitialData: (data: InitialData) => void;
  setCurrentPage: (page: number) => void;
}
