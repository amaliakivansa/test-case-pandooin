import Image from "next/image";
import React from "react";

type Props = {};

const TheFooter = (props: Props) => {
  return (
    <section className="bg-secondary [ flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 ] [ mt-[54px] mb-4 lg:mb-0 ] [ py-6 px-4 lg:px-44 ]">
      <div className="text-white font-albert-sans text-center">© 2023 Zamrood by PT Teknologi Pandu Wisata</div>
      <div className="flex justify-between items-center gap-6">
        <Image src="/images/icon-fb.svg" alt="Logo" width={25} height={50} />
        <Image src="/images/icon-ig.svg" alt="Logo" width={25} height={50} />
        <Image src="/images/icon-email.svg" alt="Logo" width={25} height={50} />
      </div>
    </section>
  );
};

export default TheFooter;
