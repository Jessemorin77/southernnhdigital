import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Team from "./components/sections/Team";
import Gallery from "./components/sections/Gallery";
import Reviews from "./components/sections/Reviews";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import ShopVibe from "./components/sections/ShopVibe";
import BookingCta from "./components/sections/BookingCta";

export default function BarberHomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Team />
      <Gallery />
      <Reviews />
      <WhyChooseUs />
      <ShopVibe />
      <BookingCta />
    </>
  );
}
