import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { v4 as uuid } from "uuid";

export function History() {
  const {
    squares,
    history,
    setHistory,
    setSquares,
    setIsXNext,
    setWhoIsWinner,
  } = useContext(GameContext);

  function handleClick(index) {
    const newHistory = [...history];
    newHistory.splice(index, Number.MAX_SAFE_INTEGER);
    setHistory(newHistory);
    setSquares(history[index].squares);
    setIsXNext(history[index].isXNext);
    setWhoIsWinner(history[index].whoIsWinner);
  }

  return (
    <div>
      {history.map((data, index) => (
        <div key={index} className="history">
          <button type="button" onClick={() => handleClick(index)}>
            Voltar para a jogada {index}
          </button>
        </div>
      ))}
    </div>
  );
}
