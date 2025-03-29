import styled from "@emotion/styled";

const PrimaryButton = styled.button`
  ${(props) => props.theme.buttons.primary.idle}

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      ${(props) => props.theme.buttons.primary.hover}
    }
  }
`;

export default PrimaryButton;
