"use client";

import Image from "next/image";

import CardLayout from "@/components/cardLayout";

import { Airport } from "@/features/airports/domain/airport";

import GradientText from "@/components/gradientText";

import { getLocalTime } from "@/utils";

export default function TimeZoneDetail({ timezone, gmt }: Airport) {
  return (
    <div className="mb-6 flex flex-col gap-6">
      <CardLayout
        leftContent={
          <>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/timezone.png"
                alt="location-image"
                width={36}
                height={46}
              />
              <GradientText className="text-[40px]">Zona Horaria</GradientText>
            </div>
            <p className="text-3xl mt-5">
              <strong> Zona Horaria:</strong> {timezone}
            </p>
            <p className="text-3xl mt-3">
              <strong>GMT:</strong> {gmt}
            </p>
          </>
        }
      />
      <CardLayout
        leftContent={
          <>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/clock.png"
                alt="location-image"
                width={36}
                height={46}
              />
              <GradientText className="text-[40px]">Hora Local</GradientText>
            </div>

            <p className="text-3xl mt-3">{getLocalTime(+gmt)}</p>
          </>
        }
      />
    </div>
  );
}
