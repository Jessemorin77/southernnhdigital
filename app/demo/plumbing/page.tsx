import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import HowItWorks from "./components/sections/HowItWorks";
import About from "./components/sections/About";
import Reviews from "./components/sections/Reviews";
import ServiceAreas from "./components/sections/ServiceAreas";
import Specials from "./components/sections/Specials";
import Contact from "./components/sections/Contact";
import FAQ from "./components/sections/FAQ";

export default function PlumbingHomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <About />
      <Reviews />
      <ServiceAreas />
      <Specials />
      <Contact />
      <FAQ />
    </>
  );
}
