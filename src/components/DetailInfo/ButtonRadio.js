import React from "react";
import ButtonRadioItem from "./ButtonRadioItem";
import ButtonRadioInput from "./ButtonRadioInput";
import ButtonRadioIndicator from "./ButtonRadioIndicator";
import { DefaultButtonRadio } from "./ButtonRadio.styled";

const ButtonRadio = ({ children }) => {
  return <DefaultButtonRadio>{children}</DefaultButtonRadio>;
};

ButtonRadio.Input = ButtonRadioInput;
ButtonRadio.Item = ButtonRadioItem;
ButtonRadio.Indicator = ButtonRadioIndicator;

export default ButtonRadio;
