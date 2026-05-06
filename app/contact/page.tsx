import BusinessInfo from "@/components/contactus/businessinfo";
import ContactCTA from "@/components/contactus/contactcta";
import ContactFormSection from "@/components/contactus/contactformsection";
import ContactHeader from "@/components/contactus/contactheader";
import ContactMap from "@/components/contactus/mapsection";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


export default function ContactPage() {
  return (
    <main className="w-full overflow-hidden">

      <Navbar/>
      <ContactHeader />
      <ContactFormSection/>
      <BusinessInfo/>
      <ContactMap/>
      <ContactCTA/>
      <Footer/>

    </main>
  );
}