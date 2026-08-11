'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Project, PROJECTS } from '@/app/data/projectsData';
import styles from './Projects.module.css';

interface ProjectsGridProps {
  categoryId?: string;
  title?: string;
}

// Cantidad de proyectos a mostrar inicialmente y en cada carga
const PROJECTS_PER_PAGE = 6;

export default function Projects({ categoryId, title }: ProjectsGridProps) {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  
  // Estado para controlar cuántos proyectos están visibles
  const [visibleCount, setVisibleCount] = useState<number>(PROJECTS_PER_PAGE);

  // Estado para la galería / modal
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Filtrado por categoría
  let filteredProjects = categoryId
    ? PROJECTS.filter((p) => p.categoryId === categoryId)
    : PROJECTS;

  // Ordenamiento
  filteredProjects = [...filteredProjects].sort((a, b) => {
    if (sortOrder === 'asc') {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    }
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  // Cortamos el arreglo para renderizar solo los proyectos visibles actuales
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  // Función para cargar más
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PROJECTS_PER_PAGE);
  };

  // Últimos proyectos para el Sidebar
  const recentProjects = [...PROJECTS]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  const openGallery = (project: Project, index: number = 0) => {
    setActiveProject(project);
    setCurrentImageIndex(index);
  };

  const closeGallery = () => {
    setActiveProject(null);
    setCurrentImageIndex(0);
  };

  const getGalleryImages = (project: Project) => {
    return project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image];
  };

  const nextImage = () => {
    if (!activeProject) return;
    const images = getGalleryImages(activeProject);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (!activeProject) return;
    const images = getGalleryImages(activeProject);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.container}>
      {title && <h1 className={styles.categoryTitle}>{title}</h1>}

      <div className={styles.mainLayout}>
        {/* Sección de proyectos */}
        <section className={styles.projectsSection}>
          <div className={styles.topBar}>
            <span className={styles.resultsCount}>
              MOSTRANDO {displayedProjects.length} DE {filteredProjects.length} PROYECTOS
            </span>
            <select
              className={styles.sortSelect}
              value={sortOrder}
              onChange={(e) => {
                setSortOrder(e.target.value as 'asc' | 'desc');
                setVisibleCount(PROJECTS_PER_PAGE); // Reinicia el conteo al ordenar
              }}
            >
              <option value="desc">MÁS RECIENTES</option>
              <option value="asc">MÁS ANTIGUOS</option>
            </select>
          </div>

          <div className={styles.grid}>
            {displayedProjects.map((project) => (
              <article 
                key={project.id} 
                className={styles.card}
                onClick={() => openGallery(project, 0)}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.cardImage}
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.viewText}>VER <span className={styles.arrowIcon}>↗</span></span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Botón Ver Más / Cargar Más */}
          {visibleCount < filteredProjects.length && (
            <div className={styles.loadMoreWrapper}>
              <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
                CARGAR MÁS PROYECTOS
              </button>
            </div>
          )}
        </section>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>AÑADIDOS RECIENTEMENTE</h2>
          <div className={styles.recentList}>
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className={styles.recentItem}
                onClick={() => openGallery(project, 0)}
              >
                <div className={styles.recentImageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <span className={styles.recentItemTitle}>{project.title}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Modal / Lightbox Minimalista */}
      {activeProject && (
        <div className={styles.modalBackdrop} onClick={closeGallery}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeGallery}>
              ✕
            </button>

            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{activeProject.title}</h2>
              <span className={styles.modalCounter}>
                {currentImageIndex + 1} / {getGalleryImages(activeProject).length}
              </span>
            </div>

            <div className={styles.modalImageContainer}>
              <Image
                src={getGalleryImages(activeProject)[currentImageIndex]}
                alt={`${activeProject.title} ${currentImageIndex + 1}`}
                fill
                style={{ objectFit: 'contain' }}
                priority
              />

              {getGalleryImages(activeProject).length > 1 && (
                <>
                  <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevImage}>
                    ←
                  </button>
                  <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextImage}>
                    →
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}