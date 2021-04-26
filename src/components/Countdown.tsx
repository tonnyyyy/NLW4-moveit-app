import { useState, useEffect } from "react";
import styles from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const initCountdownValue = 0.1 * 60;
  const [time, setTime] = useState(initCountdownValue);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(initCountdownValue);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);
  //()=> {executar função},  [quando isso mudar ]

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
          onClick={resetCountDown}
          type="button"
          className={styles.countdownBtn}
        >
          Time is over!
        </button>
      ) : isActive ? (
        <button
          onClick={resetCountDown}
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
