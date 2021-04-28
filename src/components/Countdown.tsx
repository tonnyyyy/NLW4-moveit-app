import { useState, useEffect, useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          onClick={resetCountdown}
          type="button"
          className={styles.countdownBtn}
        >
          Time is over!
        </button>
      ) : isActive ? (
        <button
          onClick={resetCountdown}
          type="button"
          className={`${styles.countdownBtn} ${styles.countdownBtnActive}`} //retorna string, então posso concatenar
        >
          Reset timer
        </button>
      ) : (
        <button
          onClick={startCountdown}
          type="button"
          className={styles.countdownBtn}
        >
          Iniciar timer
        </button>
      )}
    </div>
  );
}
