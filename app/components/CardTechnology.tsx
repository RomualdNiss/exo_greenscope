import '../styles/globals.css';
import React from "react";
import styles from "../styles/CardTechnology.module.css";

type CardTechnologyProps = {
  image: string;
  title: string;
  text: string;
  backgroundColor: string;
  textColor: string;
};

const CardTechnology: React.FC<CardTechnologyProps> = ({
  image,
  title,
  text,
  backgroundColor,
  textColor,
}) => {
  return (
    <div className={styles.card} style={{ backgroundColor }}>
      <div className={styles.details}>
        <div className={styles.iconContainer}>
          <img src={image} alt={title} className={styles.icon} />
        </div>
        <a href="#" className={styles.learnMore} style={{ color: textColor }}>
            Learn more <span className={styles.arrow}>→</span>
        </a>
      </div>
      
      <div className={styles.details}>
          <h3 className={styles.title} style={{ color: textColor }}>
            {title}
          </h3>
          <p className={styles.text} style={{ color: textColor }}>
            {text}
          </p>     
        </div>
    </div>
  );
};

export default CardTechnology;
