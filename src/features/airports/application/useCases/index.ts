import { fetchAirportsParams } from "@/features/airports/domain/airport";
import { AirportRepository } from "@/features/airports/domain/airportRepository";

export class ListAirports {
  constructor(private repo: AirportRepository) {}

  execute(params: fetchAirportsParams) {
    return this.repo.fetchAirports(params);
  }
}

export class GetAirportDetails {
  constructor(private repo: AirportRepository) {}

  execute(id: string) {
    return this.repo.getAirportDetails(id);
  }
}
