import React from "react";
import styles from "./ClientsCarousel.module.css";

export interface ClientLogo {
  id?: string | number;
  src: string;
  alt: string;
}

interface ClientsCarouselProps {
  title?: string;
  logos: ClientLogo[];
}

export default function ClientsCarousel({
  title = "Nuestros clientes",
  logos,
}: ClientsCarouselProps) {
  // Duplicamos la lista para garantizar el efecto de loop infinito suave
  const doubleLogos = [...logos, ...logos];

  return (
    <section className={styles.container}>
      {title && (
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.underline} />
        </div>
      )}

      <div className={styles.carouselContainer}>
        <div className={styles.track}>
          {doubleLogos.map((logo, index) => (
            <div key={`${logo.id || index}-${index}`} className={styles.slide}>
              <img src={logo.src} alt={logo.alt} className={styles.logoImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}