"use client";

import '../styles/globals.css';
import styles from "../styles/Technology.module.css";
import CardTechnology from './CardTechnology';

const Technology = () => {
  return (
      <div className={`marge ${styles.container}`}>
        <h1 className={styles.h1}> Designed with the best Technology</h1>
        <div className={styles.cardcontainer}>
        <CardTechnology
          image="./images/pile.png"
          title="Data integration"
          text="Lorem ipsum dolor sit amet consectetur. Sagittis sed congue semper sapien pulvinar. Tellus fames velit leo vel."
          backgroundColor="#F6FBF8"
          textColor="#3C4A41"
        />
        <CardTechnology
          image="./images/cadena.png"
          title="Security"
          text="Lorem ipsum dolor sit amet consectetur. Sagittis sed congue semper sapien pulvinar. Tellus fames velit leo vel."
          backgroundColor="#3C4A41"
          textColor="#F6FBF8"
        />
        </div>

      </div>

  );
}

export default Technology;
