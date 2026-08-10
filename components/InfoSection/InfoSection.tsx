import React from "react";
import styles from "./InfoSection.module.css";

interface InfoSectionProps {
  title: string;
  description: string | React.ReactNode;
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
}

export default function InfoSection({
  title,
  description,
  imageSrc,
  imageAlt = "Imagen informativa",
  imagePosition = "left",
}: InfoSectionProps) {
  const isImageRight = imagePosition === "right";

  return (
    <section className={styles.container}>
      <div
        className={`${styles.contentWrapper} ${
          isImageRight ? styles.reverse : ""
        }`}
      >
        {/* Lado de la Imagen */}
        <div className={styles.imageContainer}>
          <img src={imageSrc} alt={imageAlt} className={styles.image} />
        </div>

        {/* Lado del Texto */}
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.underline}></div>
          <div className={styles.description} style={{ whiteSpace: "pre-line" }}>
            {typeof description === "string" ? (
              <p>{description}</p>
            ) : (
              description
            )}
          </div>
        </div>
      </div>
    </section>
  );
}