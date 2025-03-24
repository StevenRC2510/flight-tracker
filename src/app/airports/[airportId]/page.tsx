import { ListAirports } from "@/features/airports/application/useCases";
import { AviationAPI } from "@/features/airports/infrastructure/api/aviation";

import AirportDetailManage from "@/features/airports/ui/airportDetailManage";

interface AirportDetailPageProps {
  params: { airportId: string };
}

export const revalidate = 3600; // ISR

export default async function AirportDetailPage({
  params,
}: AirportDetailPageProps) {
  // const repo = new AviationAPI();
  // const useCase = new ListAirports(repo);
  // const allAirports = await useCase.execute({ page: 1, search: "" });
  // const airportId = await params?.airportId;

  // const airport = allAirports.data.find(({ id }) => id === airportId);

  // if (!airport) {
  //   return <div className="text-white p-8">Aeropuerto no encontrado</div>;
  // }

  return <AirportDetailManage />;
}
