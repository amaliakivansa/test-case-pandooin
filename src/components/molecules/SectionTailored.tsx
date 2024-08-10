import Image from "next/image";
import React from "react";

type Props = {};

const SectionTailored = (props: Props) => {
  return (
    <section id="customize-your-trip" className="mt-14 p-4 lg:px-44">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <Image
          src="/images/tailored.svg"
          alt="Tailored"
          width={500}
          height={302}
          loading="lazy"
        />
        <div className="text-center lg:text-left">
          <h2 className="base-subtitle-3 text-secondary">
            Discover Tailored Experiences
          </h2>
          <p className="base-text-body-2">
            Create your own journey, personalized to suit your preferences and
            interests, ensuring a once-in-a-lifetime adventure awaits.
          </p>
          <button className="btn-tertiary mt-4">Customize Your Trip</button>
        </div>
      </div>

      <div className="mt-[72px] mb-[54px]">
        <Image
          src="/images/seperator.svg"
          alt="Seperator"
          width={1920}
          height={1080}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default SectionTailored;
