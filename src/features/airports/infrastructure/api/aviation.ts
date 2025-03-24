import appFetch from "@/core/appFetch";

import environment from "@/config/environment";

import { AirportRepository } from "@/features/airports/domain/airportRepository";
import {
  Airport,
  AirportsResponse,
  fetchAirportsParams,
} from "@/features/airports/domain/airport";

export class AviationAPI implements AirportRepository {
  private baseUrl = environment.appsUrl.aviationStack.api;
  private accessKey = environment.appsUrl.aviationStack.accessKey;
  private basePath = `${this.baseUrl}/v1/airports`;

  async fetchAirports({
    page = 1,
  }: fetchAirportsParams): Promise<AirportsResponse> {
    const params = {
      access_key: this.accessKey,
      limit: 10,
      offset: (page - 1) * 10,
    };
    console.log(this.basePath, "BASE PATH");
    const response = await appFetch<AirportsResponse>(this.basePath, {
      params,
    });

    return response;
  }

  async getAirportDetails(id: string): Promise<Airport> {
    const params = { access_key: this.accessKey };
    const response = await appFetch<Airport>(`${this.basePath}/${id}`, {
      params,
    });

    return response;
  }
}
