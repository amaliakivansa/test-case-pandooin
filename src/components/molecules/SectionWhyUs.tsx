import React from "react";

const SectionWhyUs = () => {
  const data = [
    {
      image: "/images/icon-personalized.svg",
      title: "Personalized Itineraries",
      desc: "Our premium travel services offer tailor-made itineraries crafted to suit your unique preferences and desires.",
    },
    {
      image: "/images/icon-exclusive.svg",
      title: "Exclusive Experiences",
      desc: "From private charters to behind-the-scenes tours, we offer access to unique opportunities that are designed to elevate your trip to the next level.",
    },
    {
      image: "/images/icon-facilities.svg",
      title: "Best Facilities",
      desc: "Experience the epitome of with our premium facility, designed to provide an unparalleled level of comfort and indulgence.",
    },
  ];
  return (
    <section className="[ mt-14 lg:mt-[72px] ] [ p-4 lg:px-44 ]">
      <div>
        <h1 className="base-subtitle-1 text-center">Beyond Premium</h1>
        <p className="base-subtitle-3 text-secondary text-center uppercase">
          Elevate Your Experience
        </p>
      </div>
      <div className="[ flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-6 ] lg:my-[72px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="[ flex flex-col justify-center items-center ] text-center"
          >
            <img src={item.image} alt={item.title} />
            <h2 className="text-primary font-albert-sans font-bold uppercase text-base">
              {item.title}
            </h2>
            <p className="font-albert-sans text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWhyUs;
