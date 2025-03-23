import { ListAirports } from "@/features/airports/application/useCases";
import { AviationAPI } from "@/features/airports/infrastructure/api/aviation";

import AirportList from "@/features/airports/ui/airportList";

type AirportsPageProps = {
  searchParams: { search?: string };
};
export default async function AirportsPage({
  searchParams,
}: AirportsPageProps) {
  const search = (await searchParams.search) ?? "";
  const repo = new AviationAPI();
  const useCase = new ListAirports(repo);
  const airports = await useCase.execute({ page: 1, search });
  console.log(airports, "AIRPORTS");

  return <AirportList initialAirports={airports} searchInitial={search} />;
}
