import React from "react";
import styles from "../styles/CardSolution.module.css";

type CardSolutionProps = {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  backgroundColor: string;
  textColor: string;
};

const CardSolution: React.FC<CardSolutionProps> = ({ title, description, keywords, image,backgroundColor,textColor }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: backgroundColor }}>
        <div className={styles.details}>
            <div>
                <h3 style={{ color: textColor }}>{title}</h3>
                <div className={styles.keywords}>
                    {keywords.map((keyword, index) => (
                    <span key={index} className={styles.keyword} style={{ backgroundColor: textColor, color:backgroundColor }}>
                        {keyword}
                    </span>
                    ))}
                </div>
            </div>
            <p style={{ color: textColor }}>{description}</p>
        </div>
      <img src={image} alt={title} />
    </div>
  );
};

export default CardSolution;
