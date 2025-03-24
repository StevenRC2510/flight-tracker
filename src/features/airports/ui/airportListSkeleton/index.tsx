import AirportCardSkeleton from "@/features/airports/ui/airportCardSkeleton";

import { AirportGridSkeletonProps } from "./types";

export default function AirportGridSkeleton({
  count = 6,
}: AirportGridSkeletonProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {Array.from({ length: count }).map((_, idx) => (
        <AirportCardSkeleton key={idx} />
      ))}
    </div>
  );
}
