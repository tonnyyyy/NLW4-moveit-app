import React from "react";
import styles from "../styles/components/ExpBar.module.css";

export function ExpBar() {
  return (
    <header className={styles.expBar}>
      <span>0</span>
      <div>
        <div style={{ width: "50%" }} />
        <span className={styles.currentExp} style={{ left: "50%" }}>
          250
        </span>
      </div>
      <span>500</span>
    </header>
  );
}
