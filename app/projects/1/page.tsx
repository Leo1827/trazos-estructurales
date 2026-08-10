import CtaTitleParallax from "@/components/CtaTitleParallax/CtaTitleParallax";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function ProjectPageOne() {
    // projects grid

      return (
        <>
        <Navbar />
        <main className="margin-top">
            <h1>Hola</h1>
            <CtaTitleParallax
                                title="Diseño Arquitec." 
                                bgImage="/images/services_portada.jpg" 
                            />
        </main>

        <Footer />
        </>
      );
}