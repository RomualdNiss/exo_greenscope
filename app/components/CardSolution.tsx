import React from "react";
import styles from "../styles/CardSolution.module.css";

type CardSolutionProps = {
  title: string;
  description: string;
  keywords: string[];
  image: string;
};

const CardSolution: React.FC<CardSolutionProps> = ({ title, description, keywords, image }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div className={styles.keywords}>
        {keywords.map((keyword, index) => (
          <span key={index} className={styles.keyword}>
            {keyword}
          </span>
        ))}
      </div>
      <p>{description}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default CardSolution;
