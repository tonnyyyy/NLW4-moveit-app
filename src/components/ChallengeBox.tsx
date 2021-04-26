import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <>
      <div className={styles.challengeBoxContainer}>
        {hasActiveChallenge ? (
          <div className={styles.challengeActive}>
            <header>Reward: 400 xp</header>
            <main>
              <img src="icons/fist-up.svg" alt="body" />
              <strong>New Challenge</strong>
              <p>Go wash your dishes</p>
            </main>
            <footer>
              <button type="button" className={styles.challengeFailedBtn}>
                failed :(
              </button>
              <button type="button" className={styles.challengeCompletedBtn}>
                completed!
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
    </>
  );
}
