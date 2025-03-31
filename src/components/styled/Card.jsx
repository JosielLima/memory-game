import styled from "@emotion/styled";

const Card = styled.div`
  ${(props) => props.theme.spacing.xxl},
  ${(props) => props.theme.borderRadius.extra},
	${(props) => props.theme.colors.secondary.contrast}
`;

export default Card;
