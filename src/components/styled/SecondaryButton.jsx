import styled from "@emotion/styled";

const SecondaryButton = styled.button`
  ${(props) =>
    props.active
      ? props.theme.buttons.secondary.active
      : props.theme.buttons.secondary.idle}

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      ${(props) => props.theme.buttons.secondary.hover}
    }
  }
`;

export default SecondaryButton;
