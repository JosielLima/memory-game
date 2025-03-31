import React from "react";
import { useAtom } from "jotai";
import { Link } from "react-router";
import {
  selectedThemeAtom,
  selectedNumberPlayersAtom,
  selectedGridSizeAtom,
} from "../components/atoms";
import { PrimaryButton, SecondaryButton, Card } from "../components/styled";

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
    <Card>
      <h1>{selectedTheme || "Select a theme"}</h1>
      <div>
        <SecondaryButton
          onClick={() => handleTheme("numbers")}
          active={selectedTheme === "numbers"}
        >
          Numbers
        </SecondaryButton>
        <SecondaryButton
          onClick={() => handleTheme("icons")}
          active={selectedTheme === "icons"}
        >
          Icons
        </SecondaryButton>
      </div>
      <div>
        <SecondaryButton
          onClick={() => handleNumberPlayers("1")}
          active={selectedNumberPlayers === "1"}
        >
          1
        </SecondaryButton>
        <SecondaryButton
          onClick={() => handleNumberPlayers("2")}
          active={selectedNumberPlayers === "2"}
        >
          2
        </SecondaryButton>
        <SecondaryButton
          onClick={() => handleNumberPlayers("3")}
          active={selectedNumberPlayers === "3"}
        >
          3
        </SecondaryButton>
        <SecondaryButton
          onClick={() => handleNumberPlayers("4")}
          active={selectedNumberPlayers === "4"}
        >
          4
        </SecondaryButton>
      </div>
      <div>
        <SecondaryButton
          onClick={() => handleGridSize("4")}
          active={selectedGridSize === "4"}
        >
          4x4
        </SecondaryButton>
        <SecondaryButton
          onClick={() => handleGridSize("6")}
          active={selectedGridSize === "6"}
        >
          6x6
        </SecondaryButton>
      </div>
      <Link to="/playing">
        <PrimaryButton>Start Game</PrimaryButton>
      </Link>
    </Card>
  );
}
