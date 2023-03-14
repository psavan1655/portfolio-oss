import React, { useEffect, useState } from "react";
import formatMessage from "../common/format-message";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const [animationIteration, setAnimationIteration] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimationIteration(1);
    }, 1500);
    return () => setAnimationIteration(0);
  }, []);

  return (
    <div id="hero-section" className="h-[70vh]">
      <div className="flex h-full mt-28">
        <div className="flex flex-col mx-8">
          <div className={`${styles.nameHeader}  mb-4 text-white`}>
            Hi, my name is
          </div>
          <div
            className={`${styles.nameWrapper} w-fit font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 hover:italic `}
          >
            {formatMessage("name")}
          </div>
          <div
            className={`${styles.positionWrapper} text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300 mt-4`}
          >
            {formatMessage("position")}
          </div>

          <div
            className={`${styles.introWrapper} mt-8 w-[45%] text-justify text-gray-400`}
          >
            {formatMessage("introduction")}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HeroSection;
