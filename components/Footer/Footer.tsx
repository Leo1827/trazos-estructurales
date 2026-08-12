import Link from "next/link";
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
              <span><strong>E-mail:</strong> trazossupervisiontecnica@gmail.com</span>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>Carrera 7 No. 68-22 T 11, Ibagué, Colombia, 730002</span>
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
            <li>
              <Link href="/">› Inicio</Link>
            </li>
            <li>
              <Link href="/emprise">› La empresa</Link>
            </li>
            <li>
              <Link href="/services">› Servicios</Link>
            </li>
            <li>
              <Link href="/projects">› Proyectos</Link>
            </li>
            <li>
              <Link href="/contact">› Contacto</Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Sobre Nosotros & Redes */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>SOBRE NOSOTROS</h3>
          <p className={styles.text}>
            Nuestro departamento de proyectos, constituido por un grupo integral de experimentados profesionales, está dirigido a la elaboración de todo tipo de proyectos arquitectónicos, cálculos estructurales y desarrollos urbanos.
          </p>
          <p className={styles.text}>¡Contáctanos!</p>

          {/* Redes Sociales en la tercera columna */}
          <div className={styles.socialContainer}>
            <span className={styles.socialTitle}>Síguenos en redes:</span>
            <div className={styles.socialIcons}>
              <a 
                href="https://www.instagram.com/trazosestructurales" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className={styles.socialBtn}
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100084462922582" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className={styles.socialBtn}
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Barra Inferior - Copyright & Redes */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>
            © Copyright {currentYear} <strong>Trazos Estructurales</strong> - Todos los derechos reservados | Diseñado por  
            <a className={styles.linkFooter} href="https://mileer-leon.vercel.app/">
                <span> Mileer leon</span>
            </a>
          </p>

          {/* Iconos de redes en la barra inferior */}
          <div className={styles.bottomSocial}>
            <a href="https://www.instagram.com/trazosestructurales" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100084462922582" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}