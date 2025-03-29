import React from "react";
import { useAtom } from "jotai";
import { Link } from "react-router";
import {
  selectedThemeAtom,
  selectedNumberPlayersAtom,
  selectedGridSizeAtom,
} from "../components/atoms";

export default function Start() {
  const [selectedTheme, setSelectedTheme] = useAtom(selectedThemeAtom);
  const [selectedNumberPlayers, setSelectedNumberPlayers] = useAtom(
    selectedNumberPlayersAtom,
  );
  const [selectedGridSize, setSelectedGridSize] = useAtom(selectedGridSizeAtom);

  const handleTheme = (theme) => {
    setSelectedTheme(theme);
  };

  const handleNumberPlayers = (numberPlayers) => {
    setSelectedNumberPlayers(numberPlayers);
  };

  const handleGridSize = (gridSize) => {
    setSelectedGridSize(gridSize);
  };

  return (
    <div>
      <h1>{selectedTheme || "Select a theme"}</h1>
      <div>
        <button onClick={() => handleTheme("numbers")}>Numbers</button>
        <button onClick={() => handleTheme("icons")}>Icons</button>
      </div>
      <div>
        <button onClick={() => handleNumberPlayers("1")}>1</button>
        <button onClick={() => handleNumberPlayers("2")}>2</button>
        <button onClick={() => handleNumberPlayers("3")}>3</button>
        <button onClick={() => handleNumberPlayers("4")}>4</button>
      </div>
      <div>
        <button onClick={() => handleGridSize("4")}>4x4</button>
        <button onClick={() => handleGridSize("6")}>6x6</button>
      </div>
      <div>
        Link to playing: <Link to="/playing">Playing</Link>
      </div>
    </div>
  );
}
