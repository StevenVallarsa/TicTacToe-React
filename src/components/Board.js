import React from "react";
import Square from "./Square";

function Board({ squares, onClick }) {
  return (
    <div>
      <Square value={1} onClick={() => onClick("function to come later")} />
      <Square value={2} onClick={() => onClick("function to come later")} />
      <Square value={3} onClick={() => onClick("function to come later")} />
    </div>
  );
}

export default Board;
