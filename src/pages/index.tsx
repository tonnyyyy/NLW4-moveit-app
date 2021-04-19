import Head from "next/head";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExpBar } from "../components/ExpBar";
import { Profile } from "../components/Profile";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NLW 4 - MoveIt App</title>
      </Head>

      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>BRONZE II</h1>
      <ExpBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  );
}