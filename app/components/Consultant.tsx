"use client";

import { useState, useRef, useEffect } from "react";
import styles from "../styles/Consultant.module.css";
import "../styles/globals.css";
import Cardconsult from "./Cardconsult";

const Consultant = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0); // Stocke la largeur d'une carte
  const containerRef = useRef<HTMLDivElement>(null); // Référence au conteneur des cartes

  const cards = [
    {
      img: "img1",
      title: "For Companies",
      text: "Elevate your ESG strategy to its full potential: measure all your impacts, lead CSRD initiatives, assess your risks and shape your sustainable strategy",
    },
    {
      img: "img2",
      title: "For Customers",
      text: "Elevate your ESG strategy to its full potential: measure all your impacts, lead CSRD initiatives, assess your risks and shape your sustainable strategy",
    },
    {
      img: "img1",
      title: "For Companies",
      text: "Elevate your ESG strategy to its full potential: measure all your impacts, lead CSRD initiatives, assess your risks and shape your sustainable strategy",
    },
    {
      img: "img2",
      title: "For Customers",
      text: "Elevate your ESG strategy to its full potential: measure all your impacts, lead CSRD initiatives, assess your risks and shape your sustainable strategy",
    },
  ];

  // Mesure de la largeur d'une carte après le rendu
  useEffect(() => {
    if (containerRef.current) {
      const cardElement = containerRef.current.querySelector("div");
      if (cardElement) {
        setCardWidth(cardElement.clientWidth + 24); // Ajoute la marge entre les cartes (24px dans ce cas)
      }
    }
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`centered ${styles.consultantcontainer}`}>
      <div className={`marge`}>
        <div className={`${styles.title}`}>
          <h2>A solution for everyone</h2>

          <div className={`${styles.divarrow}`}>
            <button className={`${styles.arrow}`} onClick={handlePrevious}>

              <svg width="58" height="40" viewBox="0 0 58 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="-0.4" y="0.4" width="56.8" height="39.2" rx="19.6" transform="matrix(-1 0 0 1 56.8 0)" stroke="#F4F8EF" strokeWidth="0.8"/>
                <path d="M23.2 20h11.2" stroke="#F4F8EF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M27.2 24l-4-4" stroke="#F4F8EF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M27.2 16l-4 4" stroke="#F4F8EF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

            </button>

            <button className={`${styles.arrow}`} onClick={handleNext}>

              <svg width="59" height="40" viewBox="0 0 59 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="0.4" width="56.8" height="39.2" rx="19.6" stroke="#F4F8EF" strokeWidth="0.8"/>
                <path d="M35 20H23.8" stroke="#F4F8EF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M31 24l4-4" stroke="#F4F8EF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M31 16l4 4" stroke="#F4F8EF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              
            </button>
          </div>
        </div>

        <div
          className="flex"
          ref={containerRef}
          style={{
            transform: `translateX(-${currentIndex * cardWidth}px)`,
            display: "flex",
            gap: "24px",
            transition: "transform 0.5s ease",
          }}
        >
          {cards.map((card, index) => (
            <Cardconsult
              key={index}
              img={card.img}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consultant;
