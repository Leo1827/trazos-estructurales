import CtaBar from "@/components/CtaBar/CtaBar";
import CtaTitleParallax from "@/components/CtaTitleParallax/CtaTitleParallax";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar"

export default function ContactPage() {
    // Servicios grid

      return (
        <>
            <Navbar />
            <main className="margin-top">
                <CtaTitleParallax
                    title="Contacto" 
                    bgImage="/images/headerImage3.jpg" 
                />
            
                <CtaBar />
            </main>

            <Footer />
        </>
      );
}