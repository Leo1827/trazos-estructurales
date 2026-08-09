import React from "react";
import styles from "./Feature.module.css";

export default function Feature() {
  return (
    <section id="servicios" className={styles.section}>


      <div className={styles["services-grid"]}>

        <div className={styles["service-card"]}>
          <div className={styles["service-icon"]}>
            <i className="fa-solid fa-compass-drafting"></i>
          </div>
          <h3 className={styles["service-title"]}>Diseño Arquitectónico</h3>
          <p className={styles["service-description"]}>
            Diseño volumétrico espacial sofisticado, equilibrando la estética contemporánea con la funcionalidad estructural y sostenibilidad.
          </p>
        </div>

        <div className={styles["service-card"]}>
          <div className={styles["service-icon"]}>
            <i className="fa-solid fa-hammer"></i>
          </div>
          <h3 className={styles["service-title"]}>Construcción</h3>
          <p className={styles["service-description"]}>
            Revitalización estructural y estética de propiedades existentes, elevando drásticamente su valor comercial y confort espacial.
          </p>
        </div>

        <div className={styles["service-card"]}>
          <div className={styles["service-icon"]}>
            <i className="fa-solid fa-helmet-safety"></i>
          </div>
          <h3 className={styles["service-title"]}>Consultoría en proyectos</h3>
          <p className={styles["service-description"]}>
            Desarrollo e ingeniería de infraestructuras complejas, proyectos comerciales y corporativos gestionados con rigor y precisión temporal.
          </p>
        </div>

        <div className={styles["service-card"]}>
          <div className={styles["service-icon"]}>
            <i className="fa-solid fa-eye"></i>
          </div>
          <h3 className={styles["service-title"]}>Supervisión de Proyectos</h3>
          <p className={styles["service-description"]}>
            Auditoría, control de calidad técnico y dirección estricta de obra para asegurar la fidelidad absoluta del plano a la realidad.
          </p>
        </div>
      </div>
    </section>
  );
}