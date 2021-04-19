import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://www.github.com/diego3g.png" alt="" />
      <div>
        <strong>Tony A. Gomes</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          lvl 69
        </p>
      </div>
    </div>
  );
}
