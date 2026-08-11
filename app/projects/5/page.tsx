import CtaTitleParallax from "@/components/CtaTitleParallax/CtaTitleParallax";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";

export default function ProjectPageFive() {
    // projects grid

      return (
        <>
        <Navbar />
        <main className="margin-top">
            <CtaTitleParallax
                title="Supervisión de obras" 
                bgImage="/images/projects/5.supervision/oneProject.jpg" 
            />
            {/* Filtrado dinámico por la categoría 1 */}
              <Projects categoryId="5" />
        </main>

        <Footer />
        </>
      );
}