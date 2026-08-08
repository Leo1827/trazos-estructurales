"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsMobileProjectsOpen(false);
    };

    const toggleMobileProjects = () => {
        setIsMobileProjectsOpen((prev) => !prev);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>

                {/* Logo */}
                <a
                    href=""
                    className={styles.brandLogo}
                    onClick={closeMenu}
                >
                    <img src="/images/logo.png" alt="" className={styles.logoMovil} />
                    TRAZOS ESTRUCTURALES<span className={styles.textGold}></span>
                    <img src="/images/logo.png" alt="" className={styles.logo} />
                    
                </a>

                {/* Navegación escritorio */}
                <div className={styles.navLinks}>
                    <a href="#" className={styles.active}>
                        Inicio
                    </a>

                    <a href="#empresa" onClick={closeMenu}>
                        La empresa
                    </a>

                    <a href="#servicios">
                        Servicios
                    </a>

                    {/* Dropdown Proyectos Escritorio */}
                    <div className={styles.dropdown}>

                        <button
                            type="button"
                            className={styles.dropdownButton}
                        >
                            Proyectos
                            <span className={styles.arrow}>⌄</span>
                        </button>

                        <div className={styles.dropdownMenu}>

                            <a href="#proyecto-1">
                                Proyecto 1
                            </a>

                            <a href="#proyecto-2">
                                Proyecto 2
                            </a>

                            <a href="#proyecto-3">
                                Proyecto 3
                            </a>

                            <a href="#proyecto-4">
                                Proyecto 4
                            </a>

                        </div>

                    </div>

                    <a href="#contacto">
                        Contacto
                    </a>
                </div>

                {/* Botón menú móvil */}
                <button
                    type="button"
                    className={styles.menuBtn}
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isMenuOpen}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>

            {/* Menú móvil */}
            <div
                className={`${styles.mobileMenu} ${
                    isMenuOpen ? styles.mobileMenuOpen : ""
                }`}
            >
                <a href="#" className={styles.active} onClick={closeMenu}>
                    Inicio
                </a>

                <a href="#empresa" onClick={closeMenu}>
                    La empresa
                </a>

                <a href="#servicios" onClick={closeMenu}>
                    Servicios
                </a>

                {/* Dropdown Proyectos Móvil */}
                <div className={styles.dropdown}>

                    <button
                        type="button"
                        className={styles.dropdownButton}
                        onClick={toggleMobileProjects}
                    >
                        Proyectos
                        <span className={`${styles.arrow} ${isMobileProjectsOpen ? styles.arrowOpen : ""}`}>⌄</span>
                    </button>

                    <div className={`${styles.dropdownMenu} ${isMobileProjectsOpen ? styles.dropdownMenuMobileOpen : ""}`}>

                        <a href="#proyecto-1" onClick={closeMenu}>
                            Proyecto 1
                        </a>

                        <a href="#proyecto-2" onClick={closeMenu}>
                            Proyecto 2
                        </a>

                        <a href="#proyecto-3" onClick={closeMenu}>
                            Proyecto 3
                        </a>

                        <a href="#proyecto-4" onClick={closeMenu}>
                            Proyecto 4
                        </a>

                    </div>

                </div>

                <a href="#contacto" onClick={closeMenu}>
                    Contacto
                </a>
            </div>
        </nav>
    );
}