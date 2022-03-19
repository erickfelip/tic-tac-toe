import React from "react";
import { GameContextProvider } from "../contexts/GameContext";
import { Board } from "../Components/Board";
import "./styles.css"

export function Home() {
  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
    )
};
