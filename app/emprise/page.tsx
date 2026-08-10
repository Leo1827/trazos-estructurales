
import ClientsCarousel from "@/components/ClientsCarousel/ClientsCarousel";
import CtaBar from "@/components/CtaBar/CtaBar";
import CtaTitleParallax from "@/components/CtaTitleParallax/CtaTitleParallax";
import Footer from "@/components/Footer/Footer";
import InfoSection from "@/components/InfoSection/InfoSection";
import Navbar from "@/components/Navbar/Navbar";
import TextSection from "@/components/TextSection/TextSection";

export default function EmpresaPage() {
    // Clients carousel
    const clientLogos = [
        { id: 1, src: "/images/clientes/acsa.png", alt: "Constructora 1" },
        { id: 2, src: "/images/clientes/bh.png", alt: "Constructora 2" },
        { id: 3, src: "/images/clientes/cci.png", alt: "Constructora 3" },
        { id: 4, src: "/images/clientes/colpatria.png", alt: "Constructora 4" },
    ];
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

                {/* Sección de Experiencia laboral */}
                <TextSection title="Experiencia laboral">
                    <p>
                    Contamos con más de 30 años de experiencia laboral en la construcción
                    de redes hidráulicas, sanitarias, gas e incendios, más de 100 proyectos
                    ejecutados nos respaldan.
                    </p>
                    <p>
                    Adicional hemos incorporado el diseño de redes hidráulicas, sanitarias,
                    gas e incendios con personal especializado que brinda un aporte técnico
                    basado en las normas NTC 1500 y NFPA 14 entre otras, garantizando
                    procesos de alta calidad.
                    </p>
                </TextSection>

                {/* Carrusel de Clientes */}
                <ClientsCarousel 
                    title="Nuestros clientes" 
                    logos={clientLogos} 
                />
                <CtaBar />
            </main>

            <Footer />
        </>
    );
}