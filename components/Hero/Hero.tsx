"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./Hero.module.css";

// 1. Estructura de datos con la información independiente para cada slide
const HERO_SLIDES = [
    {
        image: "/images/headerImage.jpg",
        subtitle: "Estudio Arquitectónico & Constructora de Lujo",
        title: <>Diseño Arquitectónico. <br className={styles["desktop-br"]} />Supervisión de <span>Obras</span>.</>,
        description: "Empresa especializada en proyectos Arquitectónicos y Estructurales, Desarrollos urbanos. Expertos con más de 20 años de experiencia en Diseño arquitectónico, Construcción, Supervisión de obras y consultoría en proyectos.",
        primaryBtnText: "Contáctanos",
        primaryBtnLink: "/contact",
        secondaryBtnText: "Ver Proyectos",
        secondaryBtnLink: "/projects",
    },
    {
        image: "/images/headerImage2.jpg",
        subtitle: "Consultoría Especializada & Ingeniería",
        title: <>Construcción <br className={styles["desktop-br"]} />y <span>Desarrollo Urbano</span>.</>,
        description: "Optimizamos y respaldamos la estructura de tu proyecto con análisis de alta precisión, garantizando seguridad, eficiencia y diseño de vanguardia en cada etapa.",
        primaryBtnText: "Nuestros Servicios",
        primaryBtnLink: "/services",
        secondaryBtnText: "Solicitar Asesoría",
        secondaryBtnLink: "/contact",
    },
    {
        image: "/images/headerImage3.jpg",
        subtitle: "Portafolio de Proyectos Destacados",
        title: <>Consultoría <br className={styles["desktop-br"]} />De<span> Proyectos</span>.</>,
        description: "Cada estructura que construimos comienza con una planificación rigurosa, un diseño preciso y un equipo comprometido.",
        primaryBtnText: "Explorar Portafolio",
        primaryBtnLink: "/projects",
        secondaryBtnText: "Cotizar Proyecto",
        secondaryBtnLink: "/contact",
    },
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    };

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, []);

    // Autoplay cada 8 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 8000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    // Slide activo actual
    const currentSlide = HERO_SLIDES[currentIndex];

    return (
        <section className={styles.hero}>
            {/* Carrusel de imágenes de fondo */}
            <div className={styles["hero-carousel"]}>
                {HERO_SLIDES.map((slide, index) => (
                    <div
                        key={slide.image}
                        className={`${styles["hero-bg"]} ${
                            index === currentIndex ? styles["active"] : ""
                        }`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                ))}
            </div>

            {/* Overlay gradiente */}
            <div className={styles["hero-overlay"]}></div>

            {/* Flechas de navegación */}
            <button
                className={`${styles["carousel-arrow"]} ${styles["arrow-left"]}`}
                onClick={prevSlide}
                aria-label="Imagen anterior"
            >
                &#10094;
            </button>
            <button
                className={`${styles["carousel-arrow"]} ${styles["arrow-right"]}`}
                onClick={nextSlide}
                aria-label="Siguiente imagen"
            >
                &#10095;
            </button>

            {/* Contenido dinámico según el slide activo */}
            <div className={styles["hero-content"]} key={currentIndex}>
                <span className={styles["hero-subtitle"]}>
                    {currentSlide.subtitle}
                </span>

                <h1 className={styles["hero-title"]}>
                    {currentSlide.title}
                </h1>

                <p className={styles["hero-description"]}>
                    {currentSlide.description}
                </p>

                <div className={styles["hero-buttons"]}>
                    <a href={currentSlide.primaryBtnLink} className={styles["btn-primary"]}>
                        {currentSlide.primaryBtnText}
                    </a>
                    <a href={currentSlide.secondaryBtnLink} className={styles["btn-secondary"]}>
                        {currentSlide.secondaryBtnText}
                    </a>
                </div>
            </div>

            {/* Indicador de Scroll */}
            <div className={styles["scroll-indicator"]}>
                <span>Scroll</span>
                <div className={styles["scroll-line"]}></div>
            </div>
        </section>
    );
}