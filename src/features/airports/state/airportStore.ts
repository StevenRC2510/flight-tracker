import { create } from "zustand";

import { Airport } from "@/features/airports/domain/airport";
import { AviationAPI } from "@/features/airports/infrastructure/api/aviation";

import { ListAirports } from "@/features/airports/application/useCases";

interface AirportState {
  airports: Airport[];
  loading: boolean;
  fetchAirports: (page: number, search: string) => Promise<void>;
}

export const useAirportStore = create<AirportState>((set) => ({
  airports: [],
  loading: false,
  fetchAirports: async (page, search) => {
    set({ loading: true });
    const airports = await new ListAirports(new AviationAPI()).execute(
      page,
      search
    );
    set({ airports, loading: false });
  },
}));
