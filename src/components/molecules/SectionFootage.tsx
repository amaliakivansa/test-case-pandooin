"use client";
import React, { useState } from "react";
import Image from "next/image";
import Carousel from "../atoms/Carousel";

const SectionFootage = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const footagePicts = [
    { src: "/images/footages/footages-1.png", alt: "Footage 1" },
    { src: "/images/footages/footages-2.png", alt: "Footage 2" },
    { src: "/images/footages/footages-3.png", alt: "Footage 3" },
    { src: "/images/footages/footages-4.png", alt: "Footage 4" },
    { src: "/images/footages/footages-5.png", alt: "Footage 5" },
    { src: "/images/footages/footages-6.png", alt: "Footage 6" },
  ];

  const openFullscreen = (index: number) => {
    setCurrentIndex(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <section className="bg-tertiary py-[72px] mt-[54px]">
      <div className="px-9 lg:px-44">
        <h2 className="base-subtitle-1 text-secondary">Luxury Footage</h2>
      </div>
      <div className="hidden w-full lg:grid grid-cols-3 gap-6 px-44 mt-6">
        {footagePicts.map((footagePict, idx) => (
          <div
            key={idx}
            className="relative w-full aspect-[356/256] cursor-pointer"
            onClick={() => openFullscreen(idx)}
          >
            <Image
              src={footagePict.src}
              fill
              alt="footage"
              className="w-full h-full absolute object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Carousel */}
      {isFullscreen && (
        <Carousel
          slides={footagePicts}
          type="fullscreen"
          isFullscreen={isFullscreen}
          closeFullscreen={closeFullscreen}
          currentIndex={currentIndex}
          onSelectImage={setCurrentIndex}
        />
      )}

      {/* Mobile View */}
      <div className="block lg:hidden aspect-[356/256] w-4/5 mx-auto mt-6 overflow-hidden">
        <Carousel slides={footagePicts} type="interval" />
      </div>
    </section>
  );
};

export default SectionFootage;
