import React from "react";
import Image from "next/image";

type ArticleProps = {
  src: string;
  title: string;
  idx: number;
};

const ArticleCard = (props: ArticleProps) => {
  const maxTitleLength = 50; 
  const truncatedTitle =
    props.title.length > maxTitleLength 
      ? `${props.title.slice(0, maxTitleLength)}...`
      : props.title;
  return (
    <a
      href="#"
      className={`w-full flex flex-col ${props.idx === 0 ? "lg:row-span-2 lg:col-span-2" : ""}`}
    >
      <div className="relative w-full h-full aspect-video overflow-hidden">
        <Image
          src={props.src}
          alt="Article"
          layout="fill"
          objectFit="cover"
          className="grayscale hover:grayscale-0"
        />
      </div>
      <div className="w-full p-6 lg:p-4 bg-primary flex flex-col space-y-2 text-neutral font-albert-sans text-base font-bold">
        {truncatedTitle}
      </div>
    </a>
  );
};

export default ArticleCard;
