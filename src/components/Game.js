import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helpers.js";

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = square => {
    const boardCopy = [...board];
    if (winner || boardCopy[square]) return;
    boardCopy[square] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(prev => !prev);
  };

  const jumpTo = () => {};

  const renderMoves = () => {};

  return (
    <div>
      <Board squares={board} onClick={handleClick} />
    </div>
  );
}

export default Game;
