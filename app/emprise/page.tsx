
import CtaBar from "@/components/CtaBar/CtaBar";
import CtaTitleParallax from "@/components/CtaTitleParallax/CtaTitleParallax";
import Footer from "@/components/Footer/Footer";
import InfoSection from "@/components/InfoSection/InfoSection";
import Navbar from "@/components/Navbar/Navbar";

export default function EmpresaPage() {
  return (
        <>
            <Navbar />

            <main className="margin-top">
               <CtaTitleParallax
                    title="LA EMPRESA" 
                    bgImage="/images/headerImage.jpg" 
                />
                <InfoSection
                    title="Sobre nosotros"
                    imageSrc="/images/infoImage.png"
                    imageAlt="Ingenieros trabajando sobre planos"
                    imagePosition="left"
                    description="Nuestro departamento de proyectos, constituido por
                                un grupo integral de experimentados profesionales,
                                está dirigido a la elaboración de todo tipo de
                                proyectos arquitectónicos, y de desarrollos urbanos.
                                Posee la capacidad de desarrollar todos los aspectos
                                de un proyecto, por pequeño o grande que sea."
                />
                <InfoSection
                    title="Equipo de trabajo"
                    imageSrc="/images/infoImage1.png"
                    imageAlt="Ingenieros trabajando sobre planos"
                    imagePosition="right"
                    description="En Trazos estructurales, los riesgos no desaparecen… se gestionan.

                                Una obra exitosa no es la que nunca enfrenta problemas, sino la que identifica, evalúa y controla los riesgos antes de que afecten el plazo, el costo y la calidad del proyecto.
                                
                                    - Una correcta gestión de riesgos permite:
                                    - Tomar mejores decisiones
                                    - Reducir retrasos y sobrecostos
                                    - Mejorar la productividad
                                    - Anticipar problemas antes de que ocurran
                                    - Proteger la rentabilidad del proyecto"
                />
                <CtaBar />
            </main>

            <Footer />
        </>
    );
}