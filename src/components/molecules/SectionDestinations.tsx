"use client";
import React from "react";
import TravelCard from "../atoms/TravelCard";
import { useFetchDestination } from "@/services";
import { IFetchDestinationResponse } from "@/types/common";
import Image from "next/image";

const SectionDestinations = () => {
  const { data, isLoading } = useFetchDestination();

  const renderExploreMore = () => (
    <>
      <Image
        src="/images/chevron-right.svg"
        width={40}
        height={40}
        alt="Chevron"
        loading="lazy"
      />
      <p className="uppercase font-bold text-base">Explore More</p>
    </>
  );
  return (
    <section className="p-4 lg:px-44">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        <h1 className="base-subtitle-3 text-secondary">Destinations</h1>
        <div className="flex items-center gap-4 sm:mt-4 lg:mt-0">
          {renderExploreMore()}
        </div>
      </div>
      {isLoading && <p className="font-albert-sans">Loading...</p>}
      {Array.isArray(data?.data) &&
        data.data.map((item: IFetchDestinationResponse) => (
          <div
            key={item.itinerary_name}
            className="mt-6 lg:odd:my-20 w-full flex flex-col lg:odd:flex-row-reverse lg:flex-row gap-4 lg:gap-6 items-stretch"
          >
            <TravelCard
              title={item.itinerary_name}
              duration={item.itinerary_day}
              description={item.itinerary_short_description}
              partner={item.partner_name}
              price={item.related_variant.itinerary_variant_pub_price}
              image={item.related_galleries[0].src}
            />
          </div>
        ))}
      <div className="[ flex items-center justify-center lg:justify-end gap-4 ] mt-[64px] cursor-pointer">
        {renderExploreMore()}
      </div>
    </section>
  );
};

export default SectionDestinations;
