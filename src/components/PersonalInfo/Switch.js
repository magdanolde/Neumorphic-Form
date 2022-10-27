import React from "react";
import { StyledInputSwitch, StyledSpanSwitch } from "./Switch.styled";

const Switch = ({ type, value, id, checked, name, ...other }) => {
  return (
    <>
      <StyledInputSwitch
        type={type}
        name={name}
        value={value}
        id={id}
        checked={checked}
        {...other}
      />
      <StyledSpanSwitch />
    </>
  );
};

export default Switch;
