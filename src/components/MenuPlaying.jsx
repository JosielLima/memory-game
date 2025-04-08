import React, { useState } from "react";
import { Link } from "react-router";
import { Card, PrimaryButton, SecondaryButton } from "./styled";
import { css } from "@emotion/react";

const MenuPlaying = ({ onRestartGame }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const ClickRestartGame = () => {
    onRestartGame();
    onClose();
  };
  return (
    <>
      <div
        css={css`
          max-width: 100px;
          width: 100%;
          min-width: 100px;
          @media (max-width: 600px) {
            display: block;
          }
          @media (min-width: 601px) {
            display: none;
          }
        `}
      >
        <PrimaryButton onClick={onOpen}>Menu</PrimaryButton>
      </div>
      {isOpen && (
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
                display: flex;
                flex-direction: column;
                gap: 1rem;
                align-items: center;
              `}
            >
              <PrimaryButton onClick={ClickRestartGame}>Restart</PrimaryButton>
              <Link
                to="/"
                css={css`
                  width: 100%;
                  min-width: 248px;
                `}
              >
                <SecondaryButton>New Game</SecondaryButton>
              </Link>
              <SecondaryButton onClick={onClose}>Resume</SecondaryButton>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default MenuPlaying;
