import { Airport } from "@/features/airports/domain/airport";

export function filterAirportsByName(airports: Airport[], searchTerm: string) {
  return airports.filter((airport) =>
    (airport.airport_name?.toLowerCase() ?? "").includes(
      searchTerm.toLowerCase()
    )
  );
}
