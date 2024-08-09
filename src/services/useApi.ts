"use client";
import http from "@/lib/http-common";
import {
  IFetchArticleResponse,
  IFetchDestinationResponse,
} from "@/types/common";
import { useQuery } from "@tanstack/react-query";

export const useFetchDestination = () => {
  return useQuery({
    queryKey: ["fetch.destination"],
    queryFn: async () => {
      const { data } = await http.get<ApiResponse<IFetchDestinationResponse>>(
        "/itinerary?highlight=true",
      );
      return data;
    },
  });
};

export const useFetchArticles = () => {
  return useQuery({
    queryKey: ["fetch.article"],
    queryFn: async () => {
      const { data } =
        await http.get<ApiResponse<IFetchArticleResponse>>("/article");
      return data;
    },
  });
};
