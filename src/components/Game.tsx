import { useState } from "react";

import Board from "./Board";
import Score from "./Score";
import { calculateWinner } from "../utils/calculateWinner";

import styles from "../scss/Game.module.scss";

const Game = () => {
  const [board, setBoard] = useState<("X" | "O")[]>(Array(9).fill(null));
  const [xIsNext, setXISNExt] = useState<boolean>(true);
  const [moves, setMoves] = useState<number>(0);
  const [winnerX, setWinnerX] = useState<number>(0);
  const [winnerO, setWinnerO] = useState<number>(0);
  const winner = calculateWinner(board);

  const handleClick = (i: number) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) {
      return null;
    }
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXISNExt(!xIsNext);
    setMoves(moves + 1);
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.clearBTN}
        onClick={() => {
          setBoard(Array(9).fill(null));
          setMoves(0);
          if (winner) {
            xIsNext ? setWinnerO(winnerO + 1) : setWinnerX(winnerX + 1);
          }
        }}
      >
        Clear board
      </button>
      <Board squares={board} click={handleClick} />
      <p className={styles.gameInfo}>
        {moves === 9 && !winner
          ? "Draw"
          : winner
          ? "Winner " + winner
          : xIsNext
          ? "X's next move"
          : "O's next move"}
        {}
      </p>
      <Score xWins={winnerX} oWins={winnerO} />
    </div>
  );
};
export default Game;
