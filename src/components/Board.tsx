import Square from "./Square";

import { FC } from "react";

import styles from "../scss/Board.module.scss";

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
