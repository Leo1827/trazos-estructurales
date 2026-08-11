import CtaTitleParallax from "@/components/CtaTitleParallax/CtaTitleParallax";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppbutton";

export default function ProjectPage() {
    // projects grid

      return (
        <>
        <Navbar />
        <main className="margin-top">
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