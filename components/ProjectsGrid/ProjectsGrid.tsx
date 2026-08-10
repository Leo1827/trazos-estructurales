"use client";

import React from "react";
import styles from "./ProjectsGrid.module.css";

export interface ProjectItem {
  id?: string | number;
  title: string;
  category: string;
  imageSrc: string;
  isWide?: boolean; // Permite que la tarjeta ocupe 2 columnas (col-span-2)
}

interface ProjectsGridProps {
  subtitle?: string;
  title?: string;
  projects?: ProjectItem[];
}

const DEFAULT_PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "Diseño Arquitect",
    category: "Diseño urbanistico | Edificaciones | Instituciones | Interiores",
    imageSrc:
      "/images/diseno-arquitectonico.jpg",
    isWide: true,
  },
  {
    id: 2,
    title: "Supervision Técnica",
    category: "Control de planos | Control de especificaciones...",
    imageSrc:
      "/images/supervision.jpg",
    isWide: false,
  },
  {
    id: 3,
    title: "Construccion",
    category: "Estructura / Arquitectura",
    imageSrc:
      "/images/construccion.jpg",
    isWide: false,
  },
  {
    id: 4,
    title: "Consultoria",
    category: "Mejores resultados",
    imageSrc:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    isWide: true,
  },
];

export default function ProjectsGrid({
  subtitle = "Portfolio",
  title = "Obras Maestras Seleccionadas",
  projects = DEFAULT_PROJECTS,
}: ProjectsGridProps) {
  return (
    <div className={styles.sectionBg}>
      <section id="proyectos" className={styles.section}>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div
              key={project.id || index}
              className={`${styles.projectCard} ${
                project.isWide ? styles.colSpan2 : ""
              }`}
            >
              <img
                src={project.imageSrc}
                alt={project.title}
                className={styles.projectImg}
              />
              <div className={styles.projectOverlay} />

              <div className={styles.projectInfo}>
                <div>
                  <span className={styles.projectCategory}>
                    {project.category}
                  </span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>


              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}