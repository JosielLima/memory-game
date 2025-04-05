import React from "react";
import { useAtom } from "jotai";
import { Link } from "react-router";
import {
  selectedThemeAtom,
  selectedNumberPlayersAtom,
  selectedGridSizeAtom,
} from "../components/atoms";
import {
  PrimaryButton,
  SecondaryButton,
  Card,
  Label,
  FlexLine,
} from "../components/styled";
import { css } from "@emotion/react";
import { Logo } from "../components";

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
    <main
      css={(theme) => css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: ${theme.colors.primary.contrast};
      `}
    >
      <div
        css={css`
          max-width: 800px;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            padding: 2rem 0;
          `}
        >
          <Logo light />
        </div>
        <Card>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              grid-gap: 2rem;
            `}
          >
            <div>
              <Label>Select Theme</Label>
              <FlexLine>
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
              </FlexLine>
            </div>
            <div>
              <Label>Numbers of Players</Label>
              <FlexLine>
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
              </FlexLine>
            </div>
            <div>
              <Label>Grid Size</Label>
              <FlexLine>
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
              </FlexLine>
            </div>
            <Link to="/playing">
              <PrimaryButton>Start Game</PrimaryButton>
            </Link>
          </div>
        </Card>
      </div>
    </main>
  );
}
