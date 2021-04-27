import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Reward: {activeChallenge.amount}</header>
          <main>
            <img src="icons/fist-up.svg" alt="body" />
            <strong>New Challenge!</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              onClick={resetChallenge}
              type="button"
              className={styles.challengeFailedBtn}
            >
              I failed :(
            </button>
            <button
              onClick={completeChallenge}
              type="button"
              className={styles.challengeCompletedBtn}
            >
              I completed!
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Complete the timer to recieve a challenge!</strong>
          <p>
            <img src="icons/level-up.svg" alt="level up" />
            level up by completing challenges
          </p>
        </div>
      )}
    </div>
  );
}
