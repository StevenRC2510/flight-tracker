import { AirportsResponse } from "@/features/airports/domain/airport";

export interface AirportListProps {
  initialAirports: AirportsResponse;
  searchInitial: string;
}
