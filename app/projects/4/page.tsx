import CtaTitleParallax from "@/components/CtaTitleParallax/CtaTitleParallax";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";

export default function ProjectPageFourt() {
    // projects grid

      return (
        <>
        <Navbar />
        <main className="margin-top">
            <CtaTitleParallax
                title="Proyectos construidos" 
                bgImage="/images/projects/4.proyectos_construidos/fourtProject.jpg" 
            />
            {/* Filtrado dinámico por la categoría 1 */}
              <Projects categoryId="4" />
        </main>

        <Footer />
        </>
      );
}