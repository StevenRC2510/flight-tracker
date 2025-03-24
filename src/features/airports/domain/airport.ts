import { PaginationApiResponse } from "@/types/general";

export type Airport = {
  id: string;
  airport_name: string;
  iata_code: string;
  icao_code: string;
  latitude: string | number;
  longitude: string | number;
  geoname_id: string | number;
  timezone: string;
  gmt: string | number;
  phone_number?: number;
  country_name: string;
  country_iso2: string;
  city_iata_code: string;
};

export type AirportsResponse = PaginationApiResponse<Airport[]>;

export type fetchAirportsParams = {
  page?: number;
};
