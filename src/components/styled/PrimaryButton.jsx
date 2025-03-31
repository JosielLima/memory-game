import styled from "@emotion/styled";

const PrimaryButton = styled.button`
  ${(props) => props.theme.buttons.primary.idle}

  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      ${(props) => props.theme.buttons.primary.hover}
    }
  }
`;

export default PrimaryButton;
