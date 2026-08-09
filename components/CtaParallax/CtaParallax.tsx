import React from "react";
import styles from "./CtaParallax.module.css";

export default function CtaParallax() {
  return (
    <section className={styles.ctaParallaxSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2 className={styles.title}>
          ¿Requieres más información? Contáctanos, con gusto te atenderemos
        </h2>
        <a href="#contacto" className={styles.btnPrimary}>
          Contáctanos <span className={styles.arrow}>&rsaquo;</span>
        </a>
      </div>
    </section>
  );
}