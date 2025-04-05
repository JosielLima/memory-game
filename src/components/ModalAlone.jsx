import React from "react";
import { css } from "@emotion/react";
import { Card } from "./styled";
import { PrimaryButton, SecondaryButton } from "./styled";
import { Link } from "react-router";
import theme from "../theme/theme";

const ModalMorePlayers = ({ onRestart, moves, timeElapsed }) => {
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
            You did it!
          </h2>
          <h6
            css={(theme) =>
              css(`
								color: ${theme.colors.primary.light};
								font-size: 1rem;
							`)
            }
          >
            Game over! Here’s how you got on…
          </h6>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: ${theme.spacing.md};
          `}
        >
          <div
            css={(theme) => css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: ${theme.spacing.md};
              border-radius: ${theme.borderRadius.extra};
              background-color: ${theme.colors.primary.light};
              & p {
                margin: 0;
                color: ${theme.colors.primary.dark};
                font-weight: ${theme.typography.fontWeight.bold};
                font-size: ${theme.typography.fontSize.h3};
              }
            `}
          >
            <p>Time Elapsed</p>
            <p>
              {" "}
              {Math.floor(timeElapsed / 60)}:
              {String(timeElapsed % 60).padStart(2, "0")}
            </p>
          </div>
          <div
            css={(theme) => css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: ${theme.spacing.md};
              border-radius: ${theme.borderRadius.extra};
              background-color: ${theme.colors.primary.light};
              & p {
                margin: 0;
                color: ${theme.colors.primary.dark};
                font-weight: ${theme.typography.fontWeight.bold};
                font-size: ${theme.typography.fontSize.h3};
              }
            `}
          >
            <p>Moves Taken</p>
            <p>{moves}</p>
          </div>
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
