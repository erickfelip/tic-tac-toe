import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

export function Reset() {
  const { setSquares, setIsXNext, setWhoIsWinner, setHistory } =
    useContext(GameContext);

  function handleClick() {
    setSquares(Array(9).fill(null));
    setIsXNext(null);
    setWhoIsWinner("");
    setHistory([]);
  }

  return (
    <p className="reset">
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </p>
  );
}
