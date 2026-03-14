import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import ServicesOverview from "./components/sections/ServicesOverview";
import Specials from "./components/sections/Specials";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import ReviewsSnippet from "./components/sections/ReviewsSnippet";
import GalleryPreview from "./components/sections/GalleryPreview";
import ServiceArea from "./components/sections/ServiceArea";
import CtaBanner from "./components/sections/CtaBanner";

export default function AutoHomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <Specials />
      <WhyChooseUs />
      <ReviewsSnippet />
      <GalleryPreview />
      <ServiceArea />
      <CtaBanner />
    </>
  );
}
