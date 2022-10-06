import React from "react";
import { DefaultButtonRadioInput } from "./ButtonRadioInput.styled";

const ButtonRadioInput = ({ type, value, name, id }) => {
  return (
    <DefaultButtonRadioInput
      type={type}
      value={value}
      name={name}
      id={id}
    ></DefaultButtonRadioInput>
  );
};

export default ButtonRadioInput;
