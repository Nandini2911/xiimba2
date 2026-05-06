import Footer from "@/components/footer";
import AboutSection from "@/components/home/aboutSection";
import ContactCTA from "@/components/home/contactcta";

import Hero from "@/components/home/hero";
import ImpactSection from "@/components/home/impactsection";
import IndustriesSection from "@/components/home/Industries";
import ManufacturingSection from "@/components/home/manufacturingsection";
import ProcessSection from "@/components/home/processsection";
import SustainabilitySection from "@/components/home/sustainability";
import WhyXiimba from "@/components/home/whyxiimba";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
   
      <AboutSection/>
      <ImpactSection/>
      <ManufacturingSection/>
      <ProcessSection/>
      <IndustriesSection/>
      <SustainabilitySection/>
      <WhyXiimba/>
      <ContactCTA/>
      <Footer/>
    </>
  );
}