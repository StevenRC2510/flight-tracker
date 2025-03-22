import { Airport } from "./airport";

export type AirportRepository = {
  fetchAirports(page: number, search: string): Promise<Airport[]>;
  getAirportDetails(id: string): Promise<Airport>;
};
