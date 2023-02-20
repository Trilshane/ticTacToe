import Square from "./Square";

import styles from "../scss/Board.module.scss";
import { FC } from "react";

type BoardProopsType = {
  squares: ("X" | "O")[];
  click: any;
};

const Board: FC<BoardProopsType> = ({ squares, click }) => {
  return (
    <div className={styles.board}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => click(i)} />
      ))}
    </div>
  );
};
export default Board;
