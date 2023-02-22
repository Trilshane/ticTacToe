import { FC } from "react";

import styles from "../scss/Score.module.scss";

type ScoreProopsType = {
  xWins: number;
  oWins: number;
};

const Score: FC<ScoreProopsType> = ({ xWins, oWins }) => {
  return (
    <p className={styles.score}>
      X wins: {xWins} <br /> O wins: {oWins}
    </p>
  );
};

export default Score;
