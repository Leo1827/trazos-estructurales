import CtaTitleParallax from "@/components/CtaTitleParallax/CtaTitleParallax";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";

export default function ProjectPageTwo() {
    // projects grid

      return (
        <>
        <Navbar />
        <main className="margin-top">
            <CtaTitleParallax
                title="Hotel, rentas cortas, centros medicos y comerciales" 
                bgImage="/images/headerProjectsTwo.jpg" 
            />
            {/* Filtrado dinámico por la categoría 1 */}
              <Projects categoryId="2" />
        </main>

        <Footer />
        </>
      );
}