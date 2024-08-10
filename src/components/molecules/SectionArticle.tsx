"use client";
import React from "react";
import { useFetchArticles } from "@/services";
import ArticleCard from "../atoms/ArticleCard";
import { IFetchArticleResponse } from "@/types/common";

const SectionArticle = () => {
  const { data, isLoading } = useFetchArticles();
  return (
    <section id="article" className="mt-[54px] p-4 lg:px-44">
      <h1 className="base-subtitle-3 text-primary">Articles</h1>
      <p className="base-text-body-1 text-primary">Our curated writings, offering something for every reader.</p>
      {isLoading && <p className="font-albert-sans">Loading...</p>}
      <div className="mt-6 w-full grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
        {Array.isArray(data?.data) &&
          data?.data.map((item: IFetchArticleResponse, idx) => (
            <ArticleCard
              key={item.title}
              title={item.title}
              src={item.featured_image}
              idx={idx}
            />
          ))}
      </div>
    </section>
  );
};

export default SectionArticle;
