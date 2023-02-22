import { FC } from "react";

import styles from "../scss/Square.module.scss";

type SquareProopsType = {
  value: "X" | "O";
  onClick: any;
};

const Square: FC<SquareProopsType> = ({ value, onClick }) => {
  return (
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  );
};
export default Square;
