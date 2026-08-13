import CtaTitleParallax from "@/components/CtaTitleParallax/CtaTitleParallax";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Preloader from "@/components/Preloader/Preloader";
import Projects from "@/components/Projects/Projects";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppbutton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos de Ingeniería y Arquitectura en Ibagué",
  description:
    "Conoce los proyectos de ingeniería civil, diseño estructural y arquitectura desarrollados por Trazos Estructurales en Ibagué y Tolima.",
};

export default function ProjectPage() {
    // projects grid

      return (
        <>
        <Navbar />
        <main className="margin-top">
            <Preloader />
            <CtaTitleParallax
                title="Proyectos" 
                bgImage="/images/headerProjects.jpg" 
            />

            <Projects title="Todos los Proyectos" />
        </main>
        <WhatsAppButton />
        <Footer />
        </>
      );
}