import { AirportRepository } from "@/features/airports/domain/airportRepository";

export class ListAirports {
  constructor(private repo: AirportRepository) {}

  execute(page: number, search: string) {
    return this.repo.fetchAirports(page, search);
  }
}

export class GetAirportDetails {
  constructor(private repo: AirportRepository) {}

  execute(id: string) {
    return this.repo.getAirportDetails(id);
  }
}
