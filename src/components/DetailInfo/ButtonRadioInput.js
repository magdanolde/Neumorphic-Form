import React from "react";
import { DefaultButtonRadioInput } from "./ButtonRadioInput.styled";

const ButtonRadioInput = ({ type, value, name, id, checked, ...other }) => {
  return (
    <DefaultButtonRadioInput
      type={type}
      value={value}
      name={name}
      id={id}
      checked={checked}
      {...other}
    ></DefaultButtonRadioInput>
  );
};

export default ButtonRadioInput;
