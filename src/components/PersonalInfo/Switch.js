import React from "react";
import {
  StyledInputSwitch,
  StyledLabelSwitch,
  StyledSpanSwitch,
} from "./Switch.styled";

const Switch = () => {
  return (
    <StyledLabelSwitch>
      <StyledInputSwitch type="checkbox" />
      <StyledSpanSwitch />
    </StyledLabelSwitch>
  );
};

export default Switch;
