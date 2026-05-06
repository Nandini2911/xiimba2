import AboutCTA from "@/components/aboutus/aboutcta";
import AboutHero from "@/components/aboutus/aboutHero";
import Certifications from "@/components/aboutus/certifications";
import CompanyOverview from "@/components/aboutus/companyoverview";
import Leadership from "@/components/aboutus/leadership";
import Manufacturing from "@/components/aboutus/manufacturing";
import OurStory from "@/components/aboutus/ourstory";
import ProductCategories from "@/components/aboutus/productcategories";
import VisionMission from "@/components/aboutus/visionmission";
import WhyyXiimba from "@/components/aboutus/whyyximba";
import Footer from "@/components/footer";
import WhyXiimba from "@/components/home/whyxiimba";
import Navbar from "@/components/navbar";


export default function About() {
  return (
    <main>
      <Navbar/>
      <AboutHero />
      <CompanyOverview/>
      <OurStory/>
      <VisionMission/>
      <Leadership/>
      <ProductCategories/>
      <Manufacturing/>
      <WhyyXiimba/>
      <Certifications/>
      <AboutCTA/>
      <Footer/>
    </main>
  );
}