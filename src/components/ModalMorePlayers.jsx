import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Card } from "./styled";
import { PrimaryButton, SecondaryButton } from "./styled";
import { Link } from "react-router";
import theme from "../theme/theme";

const ModalMorePlayers = ({ onRestart, scores }) => {
  const [ArrayResults, setArrayResults] = useState([]);
  const [typeResult, setTypeResult] = useState("");

  useEffect(() => {
    const playersWithScores = scores.map((score, index) => ({
      name: `Player ${index + 1}`,
      score,
      id: index,
      isWinner: false,
      isDraw: false,
    }));

    const sortedPlayers = [...playersWithScores].sort(
      (a, b) => b.score - a.score,
    );

    if (sortedPlayers.length > 0) {
      const highestScore = sortedPlayers[0].score;

      const winners = sortedPlayers.filter(
        (player) => player.score === highestScore,
      );

      if (winners.length === 1) {
        sortedPlayers[0].isWinner = true;
        setTypeResult("winner");
      } else {
        winners.forEach((winner) => {
          const playerIndex = sortedPlayers.findIndex(
            (p) => p.id === winner.id,
          );
          sortedPlayers[playerIndex].isDraw = true;
          setTypeResult("draw");
        });
      }
    }
    setArrayResults(sortedPlayers);
  }, [scores]);

  return (
    <div
      css={css`
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <Card>
        <div
          css={css`
            margin-bottom: 2rem;
            & h2,
            & h6 {
              text-align: center;
            }
          `}
        >
          <h2
            css={css`
              margin-bottom: 0;
            `}
          >
            {typeResult === "draw"
              ? "It’s a tie!"
              : `Player ${ArrayResults[0].name}  Wins!`}
          </h2>
          <h6
            css={(theme) =>
              css(`
								color: ${theme.colors.primary.light};
								font-size: 1rem;
							`)
            }
          >
            Game over! Here are the results...
          </h6>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: ${theme.spacing.md};
          `}
        >
          {ArrayResults.map((result, index) => (
            <div
              css={(theme) => css`
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: ${theme.spacing.md};
                border-radius: ${theme.borderRadius.extra};
                background-color: ${result.isDraw || result.isWinner
                  ? theme.colors.primary.dark
                  : theme.colors.primary.light};
                & p {
                  margin: 0;
                  color: ${result.isDraw || result.isWinner
                    ? theme.colors.common.white
                    : theme.colors.primary.dark};
                  font-weight: ${theme.typography.fontWeight.bold};
                  font-size: ${theme.typography.fontSize.h3};
                }
              `}
              key={index}
            >
              <p>
                {result.name}{" "}
                {result.isWinner || result.isDraw ? "(Winner!)" : ""}
              </p>
              <p>{result?.score || 0} Pairs</p>
            </div>
          ))}
          <div
            css={css`
              display: grid;
              gap: ${theme.spacing.md};
              grid-template-columns: repeat(2, 1fr);
            `}
          >
            <PrimaryButton onClick={onRestart}>Restart</PrimaryButton>
            <Link to="/">
              <SecondaryButton>Setup New Game</SecondaryButton>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ModalMorePlayers;
