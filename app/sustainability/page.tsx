import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SustainabilityCommitment from "@/components/sustainability/commitment";
import SustainabilityHeader from "@/components/sustainability/header";
import SustainabilityPillars from "@/components/sustainability/pillars";
import SustainabilityPractices from "@/components/sustainability/practicesstrip";
import SustainabilityCTA from "@/components/sustainability/sustainabilitycta";


export default function SustainabilityPage() {
  return (
    <main className="w-full overflow-hidden">

      <Navbar/>
      <SustainabilityHeader />
      <SustainabilityPillars/>
      <SustainabilityPractices/>
      < SustainabilityCommitment/>
      <SustainabilityCTA/>
      <Footer/>

    </main>
  );
}