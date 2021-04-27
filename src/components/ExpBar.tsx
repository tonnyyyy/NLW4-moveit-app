import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/ExpBar.module.css";

export function ExpBar() {
  const { currentExp, expToNextLvl } = useContext(ChallengesContext);
  const percentToNextLvl = Math.round(currentExp * 100) / expToNextLvl;

  return (
    <header className={styles.expBar}>
      <span>0</span>
      <div>
        <div style={{ width: `${percentToNextLvl}%` }} />
        <span
          className={styles.currentExp}
          style={{ left: `${percentToNextLvl}%` }}
        >
          {currentExp} xp
        </span>
      </div>
      <span>{expToNextLvl}</span>
    </header>
  );
}
