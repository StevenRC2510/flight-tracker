import { create } from "zustand";
import { persist } from "zustand/middleware";

import { AirportState } from "@/features/airports/domain/state";
import { AviationAPI } from "@/features/airports/infrastructure/api/aviation";

import { ListAirports } from "@/features/airports/application/useCases";

export const useAirportStore = create<AirportState>()(
  persist(
    (set) => ({
      airports: [],
      selectedAirport: null,
      loading: false,
      currentPage: 1,
      totalItems: 0,
      totalPages: 0,

      setInitialData: ({ airports, totalItems, totalPages }) =>
        set({
          airports,
          totalItems,
          totalPages,
          currentPage: 1,
        }),

      fetchAirports: async ({ page }) => {
        set({ loading: true });

        const response = await new ListAirports(new AviationAPI()).execute({
          page,
        });

        const totalPagesCalc = Math.ceil(
          response.pagination.total / response.pagination.limit
        );

        set({
          airports: response.data,
          currentPage: page,
          totalItems: response.pagination.total,
          totalPages: totalPagesCalc,
          loading: false,
        });
      },

      setSelectedAirport: (airport) => set({ selectedAirport: airport }),

      setCurrentPage: (page) => set({ currentPage: page }),
    }),
    { name: "airport-store" }
  )
);
