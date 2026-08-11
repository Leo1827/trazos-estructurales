import React from "react";
import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="nosotros" className={styles.section}>
      <div className={styles.container}>
        
        {/* Columna Izquierda: Imagen / Visual */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/headerImage.jpg" // Cambia por tu imagen preferida (ej. arquitecto u obra)
              alt="Departamento de Diseño y Desarrollo"
              width={600}
              height={700}
              className={styles.image}
              priority
            />
            {/* Marco decorativo dorado */}
            <div className={styles.imageFrame}></div>
          </div>
        </div>

        {/* Columna Derecha: Información */}
        <div className={styles.contentColumn}>
          <span className={styles.subtitle}>Sobre Nosotros</span>
          <h2 className={styles.title}>
            Bienvenido a <span>Trazos Estructurales</span>
          </h2>
          <div className={styles.divider}></div>

          <p className={styles.description}>
            Nuestro Departamento de Diseño y Desarrollo está constituido por un grupo integral de experimentados profesionales, enfocados en la elaboración de proyectos arquitectónicos y desarrollos urbanos de vanguardia.
          </p>

          <p className={styles.highlightText}>
            Especialistas en arquitectura de vanguardia, materiales de alta calidad y espacios diseñados para inspirar éxito y funcionalidad.
          </p>

          <h3 className={styles.listHeading}>Especialidades & Servicios:</h3>
          <ul className={styles.list}>
            <li>
              <strong>Diseño Arquitectónico:</strong> Proyectos residenciales, urbanos, campestres, comerciales e industriales.
            </li>
            <li>
              <strong>Construcción & Obras:</strong> Infraestructura, urbanismo y desarrollos de vivienda.
            </li>
            <li>
              <strong>Supervisión de Obra:</strong> Prevención, corrección y solución integral en sitio.
            </li>
            <li>
              <strong>Consultoría & Gerencia:</strong> Control desde el inicio, planeación y ejecución hasta el cierre.
            </li>
            <li>
              <strong>Estudios & Presupuestos:</strong> Planeación financiera y modelos de factibilidad técnica.
            </li>
          </ul>

          <div className={styles.ctaWrapper}>
            <a href="/emprise" className={styles.btnPrimary}>
              Conoce Más
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}