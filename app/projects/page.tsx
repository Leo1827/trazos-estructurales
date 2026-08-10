import CtaTitleParallax from "@/components/CtaTitleParallax/CtaTitleParallax";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

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
        </main>

        <Footer />
        </>
      );
}