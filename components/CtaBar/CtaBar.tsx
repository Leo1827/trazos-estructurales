import React from "react";
import styles from "./CtaBar.module.css";

export default function CtaBar() {
  return (
    <section className={styles.ctaBarSection}>
      <div className={styles.container}>
        <p className={styles.text}>
          Si tienes alguna duda estamos a tus órdenes
        </p>
        <a href="/contact" className={styles.btnOutline}>
          Contáctanos <span className={styles.arrow}>&rsaquo;</span>
        </a>
      </div>
    </section>
  );
}