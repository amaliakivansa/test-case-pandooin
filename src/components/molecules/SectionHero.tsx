import React from "react";

const SectionHero = () => {
  return (
    <section className="relative h-[756px] [ bg-hero-image bg-cover bg-no-repeat bg-center ]">
      <div className="text-center lg:text-left [ absolute inset-x-0 ] [ lg:px-44 px-4 py-52 h-full ] [ flex justify-center lg:justify-end items-center lg:items-start flex-col ]">
        <p className="base-title text-tertiary">
          Premium Travel
        </p>
        <p className="base-subtitle-2 text-neutral">
        Beyond Expectation
        </p>
        <p className="text-body-1 text-neutral font-light">
          Experience the finest that Indonesia has to offer with our curated selection of premium trips, ensuring comfort every step of the way
        </p>
        <div className="btn-primary text-center mt-6">Take Me There</div>
      </div>
    </section>
  );
};

export default SectionHero;
