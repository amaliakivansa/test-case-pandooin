import SectionAdvertisement from "@/components/molecules/SectionAdvertisement";
import SectionArticle from "@/components/molecules/SectionArticle";
import SectionDestinations from "@/components/molecules/SectionDestinations";
import SectionFootage from "@/components/molecules/SectionFootage";
import SectionHero from "@/components/molecules/SectionHero";
import SectionTailored from "@/components/molecules/SectionTailored";
import SectionWhyUs from "@/components/molecules/SectionWhyUs";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionWhyUs />
      <SectionTailored />
      <SectionDestinations />
      <SectionFootage />
      <SectionAdvertisement />
      <SectionArticle />
    </>
  );
}
