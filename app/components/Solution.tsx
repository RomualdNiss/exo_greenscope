"use client";

import '../styles/globals.css';
import React, { useState } from "react";
import styles from "../styles/Solution.module.css";
import CardSolution from "./CardSolution";


type SolutionData = {
  title: string;
  description: string;
  keywords: string[];
  image: string;
};

const Solution: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<string>("ESG Data Solution");

  const solutions: SolutionData[] = [
    {
      title: "ESG Data Solution",
      description: "Automatically collect data, launch campaigns, establish quality processes, and build an organization that mirrors your own, all within our platform.",
      keywords: ["Mot clé associé", "Mot clé associé"],
      image: "/path-to-image-esg.png",
    },
    {
      title: "Carbon Assessment",
      description: "Measure and track your carbon footprint with powerful analytics tools.",
      keywords: ["Carbone", "Émissions"],
      image: "/path-to-image-carbon.png",
    },
    {
      title: "CSRD",
      description: "Comply with the latest CSRD regulations effortlessly using our tools.",
      keywords: ["Compliance", "Reporting"],
      image: "/path-to-image-csrd.png",
    },
    {
      title: "Impact Analysis & Compliance",
      description: "Analyze your environmental and social impact with precision.",
      keywords: ["Impact", "Analytics"],
      image: "/path-to-image-impact.png",
    },
  ];

  const handleSolutionClick = (title: string) => {
    setSelectedSolution(title);
  };

  const activeSolution = solutions.find(
    (solution) => solution.title === selectedSolution
  );

  return (
    <div className={'marge ${styles.solutionContainer}'}>
      <div className={styles.header} >

        <h2 className={styles.h2}>All your ESG journey needs <br/>
        in one platform
        </h2> 

        <div className={styles.tabs}>
          {solutions.map((solution) => (
            <button
            key={solution.title}
            onClick={() => handleSolutionClick(solution.title)}
            className={`${styles.test} ${
              selectedSolution === solution.title ? styles.activeTab : styles.inactiveTab
            }`}
          >
            {solution.title}
          </button>
          ))}
        </div>

      </div>  
      {activeSolution && (
        <CardSolution
          title={activeSolution.title}
          description={activeSolution.description}
          keywords={activeSolution.keywords}
          image={activeSolution.image}
        />
      )}
    </div>
  );
};

export default Solution;