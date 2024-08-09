import Image from "next/image";
import React from "react";

type TravelCardProps = {
  duration: number;
  title: string;
  description: string;
  price: string;
  partner: string;
  image: string;
};

const TravelCard = (props: TravelCardProps) => {
  const cleanedStr = props.image.replace(/\\/g, "");
  const priceInIDR = Number(props.price).toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <>
      <div className="relative lg:w-1/2 max-h-[256px] lg:max-h-[327px] aspect-video">
        <Image
          src={cleanedStr}
          fill
          alt="Destination"
          className="w-full h-full absolute object-cover object-center"
        />
      </div>
      <div className="lg:w-1/2 flex flex-col justify-between space-y-2 lg:space-y-4">
        <p className="font-albert-sans text-sm text-secondary">
          {props.duration} DAYS {props.duration - 1} NIGHTS
        </p>
        <h1 className="font-ubounded font-bold text-base text-primary">
          {props.title}
        </h1>
        <p className="base-text-body-2 text-secondary">{props.description}</p>
        <p className="font-albert-sans font-bold text-sm text-secondary">
          Organized by {props.partner}
        </p>
        <div className="flex justify-between items-center">
          <div>
            <p className="base-text-body-2 text-secondary">Start from</p>
            <p className="font-ubounded font-medium text-lg text-secondary">
              IDR {priceInIDR}
            </p>
          </div>
          <button className="btn-secondary">see details</button>
        </div>
      </div>
    </>
  );
};

export default TravelCard;
