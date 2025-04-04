import React from "react";
import { css } from "@emotion/react";
import { Card } from "./styled";
import { PrimaryButton } from "./styled";

const ModalMorePlayers = ({ onRestart }) => {
  return (
    <div
      css={(theme) => css`
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
        <div>
          <h2>Player definir Wins!</h2>
          <h6>Game over! Here are the results...</h6>
        </div>
        <div>
          <PrimaryButton onClick={onRestart}>Restart</PrimaryButton>
        </div>
      </Card>
    </div>
  );
};

export default ModalMorePlayers;
