import Image from "next/image";
import React from "react";

type Props = {};

const SectionAdvertisement = (props: Props) => {
  return (
    <section className="relative mt-[54px] p-4 lg:px-44">
      <div className="p-6 lg:mx-auto [ flex flex-col lg:flex-row justify-center lg:justify-between items-center ] [ bg-advertisement-image bg-cover bg-no-repeat bg-center opacity-90 ]">
        <Image
          src="/images/logo-white.svg"
          alt="Destination"
          width={135}
          height={50}
        />
        <div className="text-right">
          <p className="text-neutral text-center text-sm lg:text-base font-albert-sans">
            Want to see other destinations? Check us out at our website
          </p>
          <a
            href="https://www.zamrood.com/"
            className="[ text-neutral text-base lg:text-xl font-albert-sans ] cursor-pointer underline [ flex items-center lg:justify-end justify-center gap-2 ]"
            target="_blank"
          >
            <p>pandooin.com</p>
            <Image
              src="/images/icon-arrow-up.svg"
              alt="arrow-right"
              width={18}
              height={18}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionAdvertisement;
