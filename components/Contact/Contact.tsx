'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Número de teléfono de destino (con código de país sin el signo '+')
    const phoneNumber = '573112400270'; 

    // Formateamos el mensaje estructurado con saltos de línea
    const textMessage = `*Hola, Trazos Estructurales!*%0A` +
      `Quiero contizar con ustedes` +
      `*Nombre:* ${formData.nombre}%0A` +
      `*Correo:* ${formData.email}%0A` +
      `*Teléfono:* ${formData.telefono || 'No especificado'}%0A` +
      `*Mensaje:* ${formData.mensaje}`;

    // Construimos la URL de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Hola, Trazos Estructurales!\nTengo una consulta desde el sitio web:\n\n👤 Nombre: ${formData.nombre}\n✉️ Correo: ${formData.email}\n📞 Teléfono: ${formData.telefono || 'No especificado'}\n💬 Mensaje: ${formData.mensaje}`
    )}`;

    // Abrimos WhatsApp en una pestaña nueva
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        
        {/* Columna Izquierda: Formulario */}
        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>Formulario de Contacto</h2>
          <div className={styles.titleDivider} />

          <div className={styles.bannerWrapper}>
            <Image
              src="/images/oneProject.jpg" // Cambia esta ruta por la imagen de banner que desees
              alt="Contacto Trazos Estructurales"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <p className={styles.description}>
            Si tienes alguna duda puedes llamarnos a nuestro teléfono o llenar el siguiente formulario, te daremos una respuesta a la brevedad, gracias.
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="Nombre*"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Correo electrónico*"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="tel"
                placeholder="Cel/WhatsApp"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <textarea
                placeholder="Mensaje*"
                required
                rows={5}
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              ENVIAR A WHATSAPP
            </button>
          </form>
        </div>

        {/* Columna Derecha: Información + Mapa */}
        <aside className={styles.infoSection}>
          <h2 className={styles.sidebarTitle}>Datos de Contacto</h2>

          <div className={styles.infoList}>
            {/* Dirección */}
            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <span><i className="fa-solid fa-location-dot"></i></span>
              </div>
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>Dirección</span>
                <p className={styles.infoText}>
                  Carrera 7 No. 68-22 T 11<br />
                  Ibagué, Colombia, 730002
                </p>
              </div>
            </div>

            {/* Celular / WhatsApp */}
            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>Cel / WhatsApp</span>
                <p className={styles.infoText}>
                  <a href="https://wa.me/573112400270" target="_blank" rel="noopener noreferrer">
                    311 240 0270
                  </a>
                  {' | '}
                  <a href="https://wa.me/573154613487" target="_blank" rel="noopener noreferrer">
                    315 461 3487
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>E-mail</span>
                <p className={styles.infoText}>
                  <a href="mailto:trazosestructuralessas@gmail.com" className={styles.emailLink}>
                    trazossupervisiontecnica@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Sección de Mapa */}
          <div className={styles.mapContainer}>
            <h3 className={styles.sidebarTitle}>Nuestra Ubicación</h3>
            <div className={styles.mapWrapper}>
              <iframe
                title="Ubicación Trazos Estructurales"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4065.9017226083256!2d-75.20041522494127!3d4.438947243870952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38c51c5658b93d%3A0x85110c778d14135e!2sCra.%207%20%2368-22%2C%20Ibagu%C3%A9%2C%20Tolima!5e1!3m2!1ses-419!2sco!4v1786514524358!5m2!1ses-419!2sco"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </aside>

      </div>
    </section>
  );
}