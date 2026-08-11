import CtaTitleParallax from "@/components/CtaTitleParallax/CtaTitleParallax";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";

export default function ProjectPageThree() {
    // projects grid

      return (
        <>
        <Navbar />
        <main className="margin-top">
            <CtaTitleParallax
                title="Vivienda campestre" 
                bgImage="/images/projects/3.campestre/threeProject.jpg" 
            />
            {/* Filtrado dinámico por la categoría 1 */}
              <Projects categoryId="3" />
        </main>

        <Footer />
        </>
      );
}