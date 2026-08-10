import CtaBar from "@/components/CtaBar/CtaBar";
import CtaTitleParallax from "@/components/CtaTitleParallax/CtaTitleParallax";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar"
import ProjectsGrid from "@/components/ProjectsGrid/ProjectsGrid";


export default function EmpresaPage() {
    // Servicios grid

      return (
        <>
            <Navbar />
            <main className="margin-top">
                <CtaTitleParallax
                    title="SERVICIOS" 
                    bgImage="/images/headerImage3.jpg" 
                />
            
                <ProjectsGrid />
                <CtaBar />
            </main>

            <Footer />
        </>
      );
}