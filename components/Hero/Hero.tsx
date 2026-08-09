import styles from "./Hero.module.css";

export default function Hero() { 
    return (
        <section className={styles.hero}>
            <div className={styles["hero-bg"]}></div>
            <div className={styles["hero-overlay"]}></div>

            <div className={styles["hero-content"]}>
                <span className={styles["hero-subtitle"]}>
                    Estudio Arquitectónico &amp; Constructora de Lujo
                </span>
                <h1 className={styles["hero-title"]}>
                    Diseño Arquitectónico. <br className={styles["desktop-br"]} />
                    Supervisión de <span>Obras</span>.
                </h1>
                <p className={styles["hero-description"]}>
                    Empresa especializada en proyectos Arquitectónicos y Estructurales, Desarrollos urbanos. 
                    Expertos con más de 20 años de experiencia en Diseño arquitectónico, Construcción, 
                    Supervisión de obras y consultoría en proyectos.
                </p>
                <div className={styles["hero-buttons"]}>
                    <a href="#contacto" className={styles["btn-primary"]}>
                        Contáctanos
                    </a>
                    <a href="#proyectos" className={styles["btn-secondary"]}>
                        Ver Proyectos
                    </a>
                </div>
            </div>

            <div className={styles["scroll-indicator"]}>
                <span>Scroll</span>
                <div className={styles["scroll-line"]}></div>
            </div>
        </section>
    );
}