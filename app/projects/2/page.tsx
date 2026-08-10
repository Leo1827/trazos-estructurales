import CtaTitleParallax from "@/components/CtaTitleParallax/CtaTitleParallax";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function ProjectPageTwo() {
    // projects grid

      return (
        <>
        <Navbar />
        <main className="margin-top">
            <h1>Hola</h1>
            <CtaTitleParallax
                                title="Construcción y supervisión técnica" 
                                bgImage="/images/headerProjectsTwo.jpg" 
                            />
        </main>

        <Footer />
        </>
      );
}