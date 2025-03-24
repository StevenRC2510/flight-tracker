"use client";

import Image from "next/image";

import CardLayout from "@/components/cardLayout";
import GradientText from "@/components/gradientText";

import { Airport } from "@/features/airports/domain/airport";

export default function GeneralDetail({
  iata_code,
  icao_code,
  city_iata_code,
  country_name,
  phone_number,
}: Airport) {
  const telephoneInfo = phone_number ? phone_number : "No disponible";

  return (
    <div className="mb-6">
      <CardLayout
        leftContent={
          <>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/info.png"
                alt="location-image"
                width={36}
                height={46}
              />
              <GradientText className="text-[40px]">
                Información General
              </GradientText>
            </div>
            <p className="mb-2 text-3xl">
              <strong>Código IATA: </strong> {iata_code}
            </p>
            <p className="mb-2 text-3xl">
              <strong>Código ICAO: </strong> {icao_code}
            </p>
            <p className="mb-2 text-3xl">
              <strong>Ciudad: </strong>
              {city_iata_code}
            </p>
            <p className="mb-2 text-3xl">
              <strong>País:</strong> {country_name}
            </p>
            <p className="mb-2 text-3xl">
              <strong>Teléfono:</strong> {telephoneInfo}
            </p>
          </>
        }
      />
    </div>
  );
}
