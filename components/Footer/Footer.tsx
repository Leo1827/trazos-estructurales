import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Columna 1: Datos de Contacto */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>¿REQUIERES MÁS INFORMACIÓN?</h3>
          <p className={styles.text}>
            Si tienes cualquier duda sobre nuestros servicios puedes comunicarte con nosotros para que te brindemos una atención más personalizada.
          </p>
          <p className={styles.subtext}>Nuestros datos de contacto son:</p>

          <ul className={styles.contactList}>

            <li>
              <i className="fa-brands fa-whatsapp"></i>
              <span><strong>Cel/WhatsApp:</strong> 311 240 0270 | 315 461 3487</span>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <span><strong>E-mail:</strong> trazosestructuralessas@gmail.com</span>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>Cra. 5 #41-16 Edif. F25 Ofic. 1201, Ibagué, Colombia, 730006</span>
            </li>
          </ul>

          <div className={styles.badge}>
            <i className="fa-solid fa-helmet-safety"></i>
            <span>Somos tu mejor opción</span>
          </div>
        </div>

        {/* Columna 2: Menú Principal */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>MENÚ PRINCIPAL</h3>
          <ul className={styles.menuList}>
            <li><a href="#inicio">› Inicio</a></li>
            <li><a href="#nosotros">› La Empresa</a></li>
            <li><a href="#servicios">› Servicios</a></li>
            <li><a href="#proyectos">› Proyectos</a></li>
            <li><a href="#contacto">› Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Sobre Nosotros */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>SOBRE NOSOTROS</h3>
          <p className={styles.text}>
            Nuestro departamento de proyectos, constituido por un grupo integral de experimentados profesionales, está dirigido a la elaboración de todo tipo de proyectos arquitectónicos, cálculos estructurales y desarrollos urbanos.
          </p>
          <p className={styles.text}>
            ¡Contáctanos!
          </p>
        </div>

      </div>

      {/* Barra Inferior - Copyright */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>
            © Copyright {currentYear} <strong>Trazos Estructurales</strong> - Todos los derechos reservados | Diseñado por  
            <a className={styles.linkFooter} href="https://mileer-leon.vercel.app/">
                <span> Mileer leon</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}