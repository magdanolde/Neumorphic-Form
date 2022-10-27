import React from "react";
import { StyledLabelSwitch } from "./Switch.styled";

const SwitchLabel = ({ id, children }) => {
  return <StyledLabelSwitch htmlFor={id}>{children}</StyledLabelSwitch>;
};

export default SwitchLabel;
