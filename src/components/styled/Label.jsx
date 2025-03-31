import styled from "@emotion/styled";

const Label = styled.label`
  font-size: ${(props) => props.theme.typography.fontSize.body};
  color: ${(props) => props.theme.colors.secondary.dark};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
  margin-bottom: 0.8rem;
  display: block;
`;

export default Label;
