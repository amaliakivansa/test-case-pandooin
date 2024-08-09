import Image from "next/image";
import React from "react";

const TheNavbar = () => {
  const links = [
    {
      title: "Homepage",
      url: "/",
    },
    {
      title: "Customize Your Trip",
      url: "/",
    },
    {
      title: "Destination",
      url: "/",
    },
    {
      title: "Article",
      url: "/",
    },
    {
      title: "Need Assistance?",
      url: "/",
    },
  ];
  return (
    <section className="[ sm:sticky md:relative top-0 z-40 ] w-full">
      {/* Desktop Navigation */}
      <div className="bg-transparent w-full [ absolute sm:hidden ] [ lg:flex flex-nowrap items-center justify-between ] [ px-44 py-6 ] ">
        <div>
          <Image
            src="/images/logo-white.svg"
            alt="logo"
            width={135}
            height={50}
            loading="lazy"
          />
        </div>
        <ul>
          {links.map((link, idx) => (
            <li key={idx} className="inline-block">
              <a
                href={link.url}
                className={`[ text-neutral font-semibold text-base font-albert-sans ] hover:border-b-[2px] border-b-neutral border-b-dark-teal ml-6 ${idx === 4 ? 'btn-primary' : ''}`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Navigation */}
      <div className="bg-neutral lg:hidden p-4 w-full [ flex justify-between items-center ]">
        <a href="/">
          <Image
            src="/images/logo-mobile.png"
            alt="logo"
            width={135}
            height={50}
            loading="lazy"
          />
        </a>
        <div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="48"
              height="48"
              rx="24"
              stroke="#0B7373"
              stroke-width="2"
            />
            <path
              d="M12.9648 15.9624H36.9648"
              stroke="#0B7373"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 25H37"
              stroke="#0B7373"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.9648 33.9624H36.9648"
              stroke="#0B7373"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default TheNavbar;
