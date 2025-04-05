import styled from "@emotion/styled";

const CardFlip = styled.div(
  ({ card, theme }) => `
  background-color: ${
    card.matched
      ? theme.colors.primary.light
      : card.flipped
        ? theme.colors.primary.main
        : theme.colors.primary.dark
  };
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  cursor: ${card.flipped || card.matched ? "default" : "pointer"};
  color: ${theme.colors.common.white};
  font-weight: bold;
  font-size: 2rem;
  transition: all 0.3s ease;

  &:hover {
    ${
      !card.flipped && !card.matched
        ? `background-color: ${theme.colors.secondary.dark};`
        : ""
    }
  }
`,
);

export default CardFlip;
