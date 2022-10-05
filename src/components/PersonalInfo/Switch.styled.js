import styled from "styled-components";

export const StyledLabelSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const StyledSpanSwitch = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #ecf0f3;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
  border-radius: 15px;
  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: lightgrey;
    transition: 4ms;
    border-radius: 50%;
    box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
  }
`;

export const StyledInputSwitch = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${StyledSpanSwitch}: before {
    transform: translate(26px);
    background-color: pink;
  }
`;
