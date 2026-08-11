'use client';

import { useState, useEffect } from 'react';
import styles from './Preloader.module.css';

interface PreloaderProps {
  /**
   * Duración total visible en milisegundos antes de iniciar el fade out (opcional)
   * Por defecto: 2500ms (2.5 segundos)
   */
  duration?: number;
  onComplete?: () => void;
}

export default function Preloader({ duration = 1000, onComplete }: PreloaderProps) {
  const [isFading, setIsFading] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Iniciar desvanecimiento tras la duración especificada
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, duration);

    // Ocultar del DOM tras completarse la animación de salida (700ms)
    const hideTimer = setTimeout(() => {
      setIsHidden(true);
      if (onComplete) onComplete();
    }, duration + 700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [duration, onComplete]);

  if (isHidden) return null;

  return (
    <div className={`${styles.overlay} ${isFading ? styles.fadeOut : ''}`}>
      <div className={styles.content}>
        
        {/* Contenedor del Círculo Giratorio + Logo Central */}
        <div className={styles.spinnerContainer}>
          <div className={styles.ring} />
          <div className={styles.logoWrapper}>
            <img 
              src="/images/logo.png" 
              alt="Trazos Estructurales" 
              className={styles.logo} 
            />
          </div>
        </div>

        {/* Marca y Subtexto */}
        <div className={styles.textGroup}>
          <h2 className={styles.title}>
            TRAZOS <span className={styles.goldText}>ESTRUCTURALES</span>
          </h2>
          <span className={styles.subtitle}>Cargando experiencia...</span>
        </div>

      </div>
    </div>
  );
}