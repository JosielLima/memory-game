import React from "react";
import { useAtom } from "jotai";
import { gameConfig } from "../components/atoms";

export default function Playing() {
  const [{ themeAtom, numberPlayersAtom, gridSizeAtom }] = useAtom(gameConfig);
  return (
    <div>
      <h1>Game Configuration</h1>
      <p>Theme: {themeAtom || "Not selected"}</p>
      <p>Number of Players: {numberPlayersAtom || "Not selected"}</p>
      <p>Grid Size: {gridSizeAtom || "Not selected"}</p>
    </div>
  );
}
