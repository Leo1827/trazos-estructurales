import CtaTitleParallax from "@/components/CtaTitleParallax/CtaTitleParallax";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import ProjectsGrid from "@/components/ProjectsGrid/ProjectsGrid";

export default function ProjectPageOne() {
  return (
    <>
      <Navbar />
      <main className="margin-top">
        <CtaTitleParallax
          title="Proyectos de vivienda" 
          bgImage="/images/oneProject.jpg" 
        />
        
        {/* Filtrado dinámico por la categoría 1 */}
        <Projects categoryId="1" />
      </main>

      <Footer />
    </>
  );
}