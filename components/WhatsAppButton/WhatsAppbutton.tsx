'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './WhatsAppButton.module.css';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber = '573112400270',
  message = 'Hola, Trazos Estructurales! Quisiera más información sobre sus servicios.',
}: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Detectar clics fuera del componente o tecla Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Si la ventana está abierta y el clic ocurrió FUERA del contenedor
      if (isOpen && containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleOpenWhatsApp = () => {
    window.open(whatsappUrl, '_blank');
  };

  const togglePopover = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.container} ref={containerRef}>
      {/* Ventanita / Popover desplegable */}
      <div className={`${styles.popover} ${isOpen ? styles.popoverOpen : ''}`}>
        <div className={styles.popoverHeader}>
          <span className={styles.statusDot} />
          <strong>Atención al cliente</strong>
          <button 
            type="button"
            className={styles.closePopover}
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>
        <div className={styles.popoverBody} onClick={handleOpenWhatsApp}>
          <p>Pulsa para enviar un WhatsApp</p>
          <span className={styles.actionLink}>Iniciar chat →</span>
        </div>
      </div>

      {/* Botón flotante principal */}
      <button
        type="button"
        className={styles.floatBtn}
        onClick={togglePopover}
        aria-label="Contactar por WhatsApp"
      >
        <i className="fa-brands fa-whatsapp" />
        <span className={styles.btnText}>WhatsApp</span>
      </button>
    </div>
  );
}