import { create } from "zustand";
import { persist } from "zustand/middleware";

import {
  Airport,
  fetchAirportsParams,
} from "@/features/airports/domain/airport";
import { AviationAPI } from "@/features/airports/infrastructure/api/aviation";

import { ListAirports } from "@/features/airports/application/useCases";

interface AirportState {
  airports: Airport[];
  selectedAirport: Airport | null;
  loading: boolean;
  fetchAirports: (params: fetchAirportsParams) => Promise<void>;
  setSelectedAirport: (airport: Airport) => void;
}

export const useAirportStore = create<AirportState>()(
  persist(
    (set) => ({
      airports: [],
      selectedAirport: null,
      loading: false,
      fetchAirports: async (params) => {
        set({ loading: true });
        const airports = await new ListAirports(new AviationAPI()).execute(
          params
        );
        set({ airports: airports.data, loading: false });
      },
      setSelectedAirport: (airport) => set({ selectedAirport: airport }),
    }),
    { name: "airport-store" }
  )
);
