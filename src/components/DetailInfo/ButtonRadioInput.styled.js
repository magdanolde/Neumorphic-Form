import styled from "styled-components";
import ButtonRadioIndicator from "./ButtonRadioIndicator";
import { DefaultButtonRadioIndicator } from "./ButtonRadioIndicator.styled";

const DefaultButtonRadioInput = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 1e-5;
  pointer-events: none;

  &:checked ~ label ${DefaultButtonRadioIndicator}::after {
    transform: scale3d(0.975, 0.975, 1) translate3d(0, 10%, 0);
    opacity: 0;
  }
`;
export { DefaultButtonRadioInput };
