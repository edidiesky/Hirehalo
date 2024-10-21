import Hero from "./(landing_pages)/_components/Hero";
import About from "./(landing_pages)/_components/About";
import TopCompanies from "./(landing_pages)/_components/TopCompanies";
import DreamJob from "./(landing_pages)/_components/DreamJob";
import Achievement from "./(landing_pages)/_components/Achievement";
import Community from "./(landing_pages)/_components/Community";
import WhyChoose from "./(landing_pages)/_components/WhyChoose";
import Newsletter from "../components/common/Newsletter";
// Newsletter
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
   <div className="w-full">
      <Header />
      <Hero/>
      <About />
      <DreamJob/>
      <TopCompanies />
      <Community/>
      <WhyChoose/>
      <Achievement />
      <Newsletter/>
      <Footer/>
   </div>
  );
}
