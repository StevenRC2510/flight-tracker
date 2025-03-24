import { ListAirports } from "@/features/airports/application/useCases";
import { AviationAPI } from "@/features/airports/infrastructure/api/aviation";
import AirportList from "@/features/airports/ui/airportList";

export default async function AirportsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const search =
    typeof resolvedSearchParams.search === "string"
      ? resolvedSearchParams.search
      : "";

  const repo = new AviationAPI();
  const useCase = new ListAirports(repo);
  const airports = await useCase.execute({ page: 1 });

  return <AirportList initialAirports={airports} searchInitial={search} />;
}
