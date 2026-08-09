import About from "@/components/About/About";
import CtaBar from "@/components/CtaBar/CtaBar";
import CtaParallax from "@/components/CtaParallax/CtaParallax";
import Feature from "@/components/Feature/Feature";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Feature />
        <About />
        <CtaParallax />
        <CtaBar />
        <Footer />
      </main>

    </>
  );
}