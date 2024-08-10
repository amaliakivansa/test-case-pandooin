"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const TheNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      title: "Homepage",
      url: "/",
    },
    {
      title: "Customize Your Trip",
      url: "#customize-your-trip",
    },
    {
      title: "Destination",
      url: "#destination",
    },
    {
      title: "Article",
      url: "#article",
    },
    {
      title: "Need Assistance?",
      url: "#",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="[ sm:sticky md:relative top-0 z-40 ] w-full">
      {/* Desktop Navigation */}
      <div className="bg-transparent w-full [ absolute sm:hidden ] [ hidden lg:flex flex-nowrap items-center justify-between ] [ px-44 py-6 ] ">
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
                className={`[ text-neutral font-semibold text-base font-albert-sans ] hover:border-b-[2px] border-b-neutral border-b-dark-teal ml-6 ${idx === 4 ? "btn-primary" : ""}`}
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
        <div onClick={() => toggleMenu()} className="cursor-pointer">
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
              strokeWidth="2"
            />
            <path
              d="M12.9648 15.9624H36.9648"
              stroke="#0B7373"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 25H37"
              stroke="#0B7373"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.9648 33.9624H36.9648"
              stroke="#0B7373"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-neutral z-50 p-4 lg:hidden flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end">
            <button onClick={toggleMenu} className="text-white">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="38"
                  height="38"
                  rx="19"
                  stroke="#0B7373"
                  strokeWidth="2"
                />
                <path
                  d="M13 13L27 27"
                  stroke="#0B7373"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27 13L13 27"
                  stroke="#0B7373"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <ul className="h-full flex flex-col justify-center items-center">
            {links.map((link, idx) => (
              <li key={idx} className="mb-4" onClick={toggleMenu}>
                <a
                  href={link.url}
                  className="[ text-secondary font-semibold text-base font-albert-sans ] block hover:text-dark-teal"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default TheNavbar;
