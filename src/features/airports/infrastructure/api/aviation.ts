import appFetch from "@/core/appFetch";

import { Airport } from "@/features/airports/domain/airport";
import { AirportRepository } from "@/features/airports/domain/airportRepository";

export class AviationAPI implements AirportRepository {
  private baseUrl = process.env.NEXT_PUBLIC_AVIATION_STACK_API!;

  async fetchAirports(page = 1, search = ""): Promise<Airport[]> {
    const params = {
      access_key: process.env.NEXT_PUBLIC_AVSTACK_KEY!,
      limit: 10,
      offset: (page - 1) * 10,
      search,
    };

    const response = await appFetch<Airport[]>(`${this.baseUrl}/airports`, {
      params,
    });

    return response;
  }

  async getAirportDetails(id: string): Promise<Airport> {
    const params = { access_key: process.env.NEXT_PUBLIC_AVIATION_STACK_KEY! };
    const response = await appFetch<Airport>(`${this.baseUrl}/airports/${id}`, {
      params,
    });

    return response;
  }
}
