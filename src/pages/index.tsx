import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExpBar } from "../components/ExpBar";
import { Profile } from "../components/Profile";
import { ChallengesContext } from "../contexts/ChallengeContext";
import { CountdownProvider } from "../contexts/CountdownContext";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  const { level } = useContext(ChallengesContext);
  const [patent, setPatent] = useState("unranked");
  useEffect(() => {
    if (level === 1) {
      setPatent("bronze");
    } else if (level > 1 && level < 3) {
      setPatent("prata");
    } else if (level >= 3 && level < 5) {
      setPatent("ouro");
    } else if (level >= 5 && level <= 8) {
      setPatent("platina");
    } else if (level > 8) {
      setPatent("transcendeu");
    }
  }, [level]);

  return (
    <div className={styles.container}>
      <Head>
        <title>RANDOM Challenger!</title>
      </Head>

      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>{patent}</h1>
      <ExpBar />
      <CountdownProvider>
        <section style={{ gap: "6rem" }}>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}
