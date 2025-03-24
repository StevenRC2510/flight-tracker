"use client";

import Image from "next/image";

import CardLayout from "@/components/cardLayout";

import { Airport } from "@/features/airports/domain/airport";

import GradientText from "@/components/gradientText";
import AirportMap from "@/features/airports/ui/airportMap";

export default function LocationDetail({
  latitude,
  longitude,
  geoname_id,
}: Airport) {
  return (
    <div className="mb-6">
      <CardLayout
        leftContent={
          <>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/location.png"
                alt="location-image"
                width={36}
                height={46}
              />
              <GradientText className="text-[40px]">Ubicación</GradientText>
            </div>
            <p className="text-3xl">
              <strong>Latitud:</strong> {latitude}
            </p>
            <p className="text-3xl">
              <strong>Longitud:</strong> {longitude}
            </p>
            <p className="text-3xl">
              <strong>ID Geoname:</strong> {geoname_id}
            </p>
          </>
        }
      />
      <div className="mt-4">
        <AirportMap latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
}
