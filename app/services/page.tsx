import CtaBar from "@/components/CtaBar/CtaBar";
import CtaTitleParallax from "@/components/CtaTitleParallax/CtaTitleParallax";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar"
import Preloader from "@/components/Preloader/Preloader";
import ProjectsGrid from "@/components/ProjectsGrid/ProjectsGrid";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppbutton";


export default function ServicesPage() {
    // Servicios grid

      return (
        <>
            <Navbar />
            <main className="margin-top">
                <Preloader />
                <CtaTitleParallax
                    title="SERVICIOS" 
                    bgImage="/images/headerImage3.jpg" 
                />
            
                <ProjectsGrid />
                <CtaBar />
            </main>
            <WhatsAppButton />
            <Footer />
        </>
      );
}