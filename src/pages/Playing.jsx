import React from "react";
import { useAtom } from "jotai";
import { gameConfig } from "../components/atoms";
import { Logo } from "../components";
import { FlexLine, PrimaryButton, SecondaryButton } from "../components/styled";
import { css } from "@emotion/react";

export default function Playing() {
  const [{ themeAtom, numberPlayersAtom, gridSizeAtom }] = useAtom(gameConfig);
  return (
    <main
      css={(theme) => css`
        display: flex;
        flex-direction: column;
        height: 100vh;
        padding: ${theme.spacing.xxl};
      `}
    >
      <header
        css={(theme) => css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: ${theme.spacing.md} 0;
        `}
      >
        <Logo />
        <div
          css={css`
            display: flex;
            gap: 1rem;
            align-items: center;
          `}
        >
          <PrimaryButton>Restart</PrimaryButton>
          <SecondaryButton>New Game</SecondaryButton>
        </div>
      </header>
      <div
        css={css`
          flex: 1;
        `}
      >
        <p>Theme: {themeAtom || "Not selected"}</p>
        <p>Number of Players: {numberPlayersAtom || "Not selected"}</p>
        <p>Grid Size: {gridSizeAtom || "Not selected"}</p>
      </div>
      {/* fake map with base numberPlayersAtom */}
      {[...Array(numberPlayersAtom)].map((_, index) => (
        <FlexLine key={index}>
          <div>Player {index + 1}</div>
        </FlexLine>
      ))}
    </main>
  );
}
