import React from "react";
import { StyledSection } from "../WelcomePage/WelcomePage.styled";
import {
  StyledInput,
  StyledForm,
  StyledContainer,
  StyledLabel,
  StyledTitle,
  StyledText,
  StyledContainerBottom,
  StyledDivError,
} from "./PersonalInfo.styled";
import { useContext } from "react";
import { TasksContext } from "..//PersonalInfo/context";
import SwitchLabel from "./LabelSwitch";
import Switch from "./Switch";

function PersonalInfo({ formData, setFormData }) {
  const { error } = useContext(TasksContext);
  return (
    <StyledSection>
      <StyledContainer>
        <StyledTitle>COMPLETE YOUR ORDER</StyledTitle>
        <StyledForm>
          <StyledLabel>Enter your name: </StyledLabel>
          <StyledInput
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => {
              console.log(e.target.value);
              setFormData({ ...formData, firstName: e.target.value });
            }}
          />
          <StyledDivError>{error.firstNameError}</StyledDivError>
          <StyledLabel>Enter your lastname: </StyledLabel>
          <StyledInput
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => {
              setFormData({ ...formData, lastName: e.target.value });
            }}
          />
          <StyledDivError>{error.lastNameError}</StyledDivError>
          <StyledLabel>Enter your email: </StyledLabel>
          <StyledInput
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <StyledDivError>{error.emailError}</StyledDivError>

          <StyledLabel>Enter your phone number: </StyledLabel>
          <StyledInput
            name="tel"
            input
            type="tel"
            value={formData.telephone}
            onChange={(e) => {
              setFormData({ ...formData, telephone: e.target.value });
            }}
          />
          <StyledDivError>{error.telError}</StyledDivError>
          <StyledLabel>Enter the desired date of delivery: </StyledLabel>
          <StyledInput
            name="date"
            input
            type="date"
            value={formData.date}
            onChange={(e) => {
              setFormData({ ...formData, date: e.target.value });
            }}
          />
          <StyledDivError>{error.dateError}</StyledDivError>
        </StyledForm>
        <StyledContainerBottom>
          <StyledText>Accept the terms and conditions of our shop</StyledText>
          <SwitchLabel htmlFor="toggleSwitch">
            <Switch
              type="checkbox"
              name="accept"
              id="toggleSwitch"
              value={formData.accept}
              checked={formData.accept}
              onChange={(e) => {
                console.log(formData.accept);
                setFormData({
                  ...formData,
                  accept: e.target.checked,
                });
              }}
            />
          </SwitchLabel>
        </StyledContainerBottom>
        <StyledDivError>{error.checkBoxError}</StyledDivError>
      </StyledContainer>
    </StyledSection>
  );
}



export default PersonalInfo;
