import { Airport, AirportsResponse, fetchAirportsParams } from "./airport";

export type AirportRepository = {
  fetchAirports(params: fetchAirportsParams): Promise<AirportsResponse>;
  getAirportDetails(id: string): Promise<Airport>;
};
