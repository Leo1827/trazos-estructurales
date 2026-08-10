import React from "react";
import styles from "./CtaTitleParallax.module.css";

interface CtaTitleParallaxProps {
  title: string;
  bgImage: string;
}

export default function CtaTitleParallax({
  title,
  bgImage,
}: CtaTitleParallaxProps) {
  return (
    <section
      className={styles.parallaxContainer}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  );
}