
import CtaTitleParallax from "@/components/CtaTitleParallax/CtaTitleParallax";
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
            </main>
        </>
    );
}