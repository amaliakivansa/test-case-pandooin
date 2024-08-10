import Image from "next/image";
import React, { useState, useEffect } from "react";

type IntervalCarouselProps = {
  slides: { src: string; alt: string }[];
  type: "fullscreen" | "interval";
  isFullscreen?: boolean;
  selectedImage?: string;
  closeFullscreen?: () => void;
  onSelectImage?: (index: number) => void; 
  currentIndex?: number;
};

const IntervalCarousel = (props: IntervalCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(props.currentIndex || 0);

  useEffect(() => {
    if (props.type === "interval") {
      const autoAdvanceInterval = 3000;
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % props.slides.length);
      }, autoAdvanceInterval);

      return () => clearInterval(interval);
    }
  }, [props.slides.length, props.type]);

  useEffect(() => {
    if (props.currentIndex !== undefined) {
      setCurrentIndex(props.currentIndex);
    }
  }, [props.currentIndex]);

  const selectImage = (index: number) => {
    setCurrentIndex(index);
    if (props.onSelectImage) {
      props.onSelectImage(index);
    }
  };

  if (props.type === "fullscreen" && props.isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-90">
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={props.closeFullscreen}
        >
          &times;
        </button>
        <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
          <Image
            src={props.slides[currentIndex]?.src ?? ""}
            fill
            alt="fullscreen footage"
            className="object-contain"
          />
        </div>
        <div className="flex mt-4 space-x-2 overflow-x-auto">
          {props.slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => selectImage(index)}
              className={`border ${
                currentIndex === index ? "border-white" : "border-transparent"
              } p-1`}
            >
              <Image
                src={slide.src}
                width={80}
                height={50}
                alt={`thumbnail ${index + 1}`}
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex transition-opacity ease-in-out duration-300"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {props.slides.map((slide, index) => (
        <div key={index} className="flex-none w-full">
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
};

export default IntervalCarousel;
