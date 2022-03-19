import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

export function Player() {
  const { isXNext } = useContext(GameContext);

  return <h1>Player: {isXNext? "X" : "O" }</h1>;
}
