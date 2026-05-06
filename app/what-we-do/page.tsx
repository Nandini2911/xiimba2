import ProductCategories from "@/components/aboutus/productcategories";
import Footer from "@/components/footer";
import WhyXiimba from "@/components/home/whyxiimba";
import Navbar from "@/components/navbar";
import Certificationss from "@/components/what we do/certificationss";
import CoreCapabilities from "@/components/what we do/corecapabilities";
import CTASection from "@/components/what we do/ctasection";
import Industriessection from "@/components/what we do/industriessection";
import ManufacturingProcess from "@/components/what we do/manufacturingprocess";
import ProductCat from "@/components/what we do/productcat";
import WhatWeDoHero from "@/components/what we do/whatwedohero";


export default function WhatWeDoPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar/>
      <WhatWeDoHero />
      <CoreCapabilities/>
      <ProductCat/>
      <ManufacturingProcess/>
      <Industriessection/>
      <WhyXiimba/>
      <Certificationss/>
      <CTASection/>
      <Footer/>
    </main>
  );
}