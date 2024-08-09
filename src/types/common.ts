export interface IFetchDestinationResponse {
  itinerary_name: string;
  itinerary_day: number;
  partner_name: string;
  itinerary_short_description: string;
  related_galleries: [
    {
      src: string;
    },
  ];
  related_variant: {
    itinerary_variant_pub_price: string;
  };
}

export interface IFetchArticleResponse {
  title: string;
  featured_image: string;
}