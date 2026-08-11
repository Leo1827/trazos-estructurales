"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
    
    // Hook para obtener la ruta actual
    const pathname = usePathname();

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsMobileProjectsOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const toggleMobileProjects = (e: React.MouseEvent) => {
        // Previene la navegación al hacer clic en la flecha o desplegable móvil si es necesario
        e.stopPropagation();
        setIsMobileProjectsOpen((prev) => !prev);
    };

    // Función auxiliar para saber si un enlace está activo
    const isActive = (path: string): boolean => pathname === path;

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>

                {/* Logo */}
                <Link
                    href="/"
                    className={styles.brandLogo}
                    onClick={closeMenu}
                >
                    <img src="/images/logo.png" alt="Logo móvil" className={styles.logoMovil} />
                        TRAZOS ESTRUCTURALES<span className={styles.textGold}></span>
                    <img src="/images/logo.png" alt="Logo" className={styles.logo} />
                </Link>

                {/* Navegación escritorio */}
                <div className={styles.navLinks}>
                    <Link 
                        href="/" 
                        className={isActive("/") ? styles.active : ""}
                    >
                        Inicio
                    </Link>

                    {/* Dirige a la página /empresa */}
                    <Link 
                        href="/emprise" 
                        className={isActive("/emprise") ? styles.active : ""}
                        onClick={closeMenu}
                    >
                        La empresa
                    </Link>

                    <Link 
                        href="/services"
                        className={isActive("/services") ? styles.active : ""}
                    >
                        Servicios
                    </Link>

                    {/* Dropdown Proyectos Escritorio (Corregido: div en lugar de Link wrapper) */}
                    <div className={`${styles.dropdown} ${isActive("/projects") ? styles.active : ""}`}>
                        <Link href="/projects" className={styles.dropdownButton}>
                            Proyectos
                            <span className={styles.arrow}>⌄</span>
                        </Link>

                        <div className={styles.dropdownMenu}>
                            <Link href="/projects/1">1. Proyectos de vivienda</Link>
                            <Link href="/projects/2">2. Hotel, rentas cortas, centros medicos y comerciales</Link>
                            <Link href="/projects/3">3. Vivienda campestre</Link>
                            <Link href="/projects/4">4. Proyectos construidos</Link>
                            <Link href="/projects/5">5. Supervision de obra</Link>
                        </div>
                    </div>

                    <Link 
                        href="/contact"
                        className={isActive("/contact") ? styles.active : ""}
                    >
                        Contacto
                    </Link>
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
                <Link 
                    href="/" 
                    className={isActive("/") ? styles.active : ""} 
                    onClick={closeMenu}
                >
                    Inicio
                </Link>

                <Link 
                    href="/emprise" 
                    className={isActive("/emprise") ? styles.active : ""} 
                    onClick={closeMenu}
                >
                    La empresa
                </Link>

                <Link 
                    href="/services" 
                    className={isActive("/services") ? styles.active : ""} 
                    onClick={closeMenu}
                >
                    Servicios
                </Link>

                {/* Dropdown Proyectos Móvil (Corregido: div en lugar de Link wrapper) */}
                <div className={`${styles.dropdown} ${isActive("/projects") ? styles.active : ""}`}>
                    <div className={styles.mobileDropdownHeader}>
                        <Link 
                            href="/projects" 
                            className={styles.dropdownButton}
                            onClick={closeMenu}
                        >
                            Proyectos
                        </Link>
                        <button
                            type="button"
                            className={styles.mobileToggleBtn}
                            onClick={toggleMobileProjects}
                        >
                            <span className={`${styles.arrow} ${isMobileProjectsOpen ? styles.arrowOpen : ""}`}>⌄</span>
                        </button>
                    </div>

                    <div className={`${styles.dropdownMenu} ${isMobileProjectsOpen ? styles.dropdownMenuMobileOpen : ""}`}>
                        <Link href="/projects/1" onClick={closeMenu}>1. Proyectos de vivienda</Link>
                        <Link href="/projects/2" onClick={closeMenu}>2. Hotel, rentas cortas, centros medicos y comerciales</Link>
                        <Link href="/projects/3" onClick={closeMenu}>3. Vivienda campestre</Link>
                        <Link href="/projects/4" onClick={closeMenu}>4. Proyectos construidos</Link>
                        <Link href="/projects/5" onClick={closeMenu}>5. Supervision de obra</Link>
                        
                    </div>
                </div>

                <Link 
                    href="/contact" 
                    className={isActive("/contact") ? styles.active : ""} 
                    onClick={closeMenu}
                >
                    Contacto
                </Link>
            </div>
        </nav>
    );
}