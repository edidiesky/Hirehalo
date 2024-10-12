import Hero from "./(landing_pages)/_components/Hero";
import About from "./(landing_pages)/_components/About";
import Reviews from "./(landing_pages)/_components/Reviews";
import Achievement from "./(landing_pages)/_components/Achievement";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
   <div className="w-full">
      <Header />
      <Hero/>
      <About />
      <Reviews />
      <Achievement />
      <Hero />
      <Footer/>
   </div>
  );
}
