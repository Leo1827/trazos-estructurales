import Contact from "@/components/Contact/Contact";
import CtaBar from "@/components/CtaBar/CtaBar";
import CtaTitleParallax from "@/components/CtaTitleParallax/CtaTitleParallax";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar"
import Preloader from "@/components/Preloader/Preloader";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppbutton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Trazos Estructurales",
  description:
    "Contacta a Trazos Estructurales para solicitar asesoría y cotización en diseño estructural, arquitectura, licencias de construcción y supervisión técnica en Ibagué y Tolima.",
};
export default function ContactPage() {
    // Servicios grid

      return (
        <>
            <Navbar />
            <main className="margin-top">
                <Preloader />
                <CtaTitleParallax
                    title="Contacto" 
                    bgImage="/images/headerImage3.jpg" 
                />

                <Contact />
                <CtaBar />
            </main>
            <WhatsAppButton />
            <Footer />
        </>
      );
}