import styled from "@emotion/styled";

const Card = styled.div`
  padding: ${(props) => props.theme.spacing.xxl};
  border-radius: ${(props) => props.theme.borderRadius.extra};
  background-color: ${(props) => props.theme.colors.secondary.contrast};
`;

export default Card;
