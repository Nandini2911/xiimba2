import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import StockFabricGrid from "@/components/stock/fabricgrid";
import StockFabricsHero from "@/components/stock/stockhero";


export default function StockFabricsPage() {
  return (
    <main className="w-full overflow-hidden">

      <Navbar/>
      <StockFabricsHero />
      <StockFabricGrid/>
      <Footer/>

    </main>
  );
}