import styled from "@emotion/styled";

const FlexLine = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`;

export default FlexLine;
