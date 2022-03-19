import React, { useContext, useEffect } from "react";
import { GameContext } from "../contexts/GameContext";
import { Square } from "./Square";
import { Player } from "./Player";
import { Reset } from "./Reset";
import { Winner } from "./Winner";
import { History } from "./History";
import { calculateWinner } from "../utils/calculateWinner";

export function Board() {
  const { squares, setWhoIsWinner, history } = useContext(GameContext);

  function winner() {
    const player = calculateWinner(squares);
    if (player) {
      setWhoIsWinner(player);
    }
    console.log(history);
  }

  useEffect(() => {
    winner();
  }, [setWhoIsWinner, squares]);

  return (
    <div className="board-container">
      <Player />
      <Winner />
      <Reset />
      <div className="board">
        {squares.map((value, index) => (
          <Square key={index} value={value} index={index} />
        ))}
      </div>
      <History />
    </div>
  );
}
