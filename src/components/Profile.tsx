import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      {/* <img src="https://www.github.com/diego3g.png" alt="" /> */}
      <img src="https://i.redd.it/0bn4rijffv251.jpg" alt="shrek" />
      <div>
        <strong>Tony A. Gomes</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          LEVEL {level}
        </p>
      </div>
    </div>
  );
}
