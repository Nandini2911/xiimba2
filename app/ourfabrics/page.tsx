import Navbar from "@/components/navbar";
import Certificationsss from "@/components/ourfabrics/certificationsss";
import CustomDevelopment from "@/components/ourfabrics/customdevelopment";
import FabricCategories from "@/components/ourfabrics/fabriccategories";
import FabricFeatures from "@/components/ourfabrics/fabricfeatures";
import FabricsHero from "@/components/ourfabrics/heroo";
import IndustriesWeServe from "@/components/ourfabrics/industriesweserve";
import ManufacturingStrength from "@/components/ourfabrics/manufacturingstrength";
import ProcessingSection from "@/components/ourfabrics/processingsection";
import FebricsCTA from "@/components/ourfabrics/fabricscta";
import Footer from "@/components/footer";
export default function FabricsPage() {
  return (
    <main className="w-full overflow-hidden">

    <Navbar/>
      <FabricsHero />
      <FabricCategories/>
      <FabricFeatures/>
      <ProcessingSection/>
      <CustomDevelopment/>
      <ManufacturingStrength/>
      <IndustriesWeServe/>
      <Certificationsss/>
      <FebricsCTA/>
      <Footer/>

    </main>
  );
}