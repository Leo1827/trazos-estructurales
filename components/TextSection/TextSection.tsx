import React from "react";
import styles from "./TextSection.module.css";

interface TextSectionProps {
  title: string;
  children: React.ReactNode;
  align?: "left" | "center" | "right";
}

export default function TextSection({
  title,
  children,
  align = "left",
}: TextSectionProps) {
  return (
    <section className={styles.container}>
      <div className={`${styles.content} ${styles[align]}`}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.underline} />
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
}