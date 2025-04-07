import styled from "@emotion/styled";

const Card = styled.div`
  padding: ${(props) => props.theme.spacing.xxl};
  border-radius: ${(props) => props.theme.borderRadius.extra};
  background-color: ${(props) => props.theme.colors.secondary.contrast};
  @media (max-width: 600px) {
    padding: ${(props) => props.theme.spacing.md};
    margin: ${(props) => props.theme.spacing.xs};
  }
`;

export default Card;
