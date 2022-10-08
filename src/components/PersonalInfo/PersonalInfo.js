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
} from "./PersonalInfo.styled";
import Switch from "./Switch";
import { TasksContext } from "./context";

function PersonalInfo({ formData, setFormData }) {
  const initialState = {
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    dateError: "",
    timeError: "",
  };

  const validateInput = () => {
    let firstNameError = "";
    let lastNameError = "";
    let emailError = "";
    let telError = "";
    let dateError = "";
    const regexdate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
    if (formData.firstName.length < 2) {
      firstNameError = "Minimum two signs are required";
    }

    if (formData.lastName.length < 2) {
      lastNameError = "Minimum two signs are required";
    }

    if (formData.email.includes("@")) {
      emailError = "Invalid email";
    }

    if (formData.tel(!isNaN)) {
      telError = "Invalid date format";
    }

    if (!regexdate.test(formData.date)) {
      dateError = "Invalid time format";
    }

    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      tel.Error ||
      dateError
    ) {
      setState({
        firstNameError,
        lastNameError,
        emailError,
        telError,
        dateError,
      });
      return false;
    }
    return true;
  };

  return (
    <>
      <TasksContext.Provider
        value={{
          validateInput,
        }}
      >
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
              <div>{initialState.firstNameError}</div>
              <StyledLabel>Enter your lastname: </StyledLabel>
              <StyledInput
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => {
                  setFormData({ ...formData, lastName: e.target.value });
                }}
              />
              <div>{initialState.lastNameError}</div>
              <StyledLabel>Enter your email: </StyledLabel>
              <StyledInput
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
              <div>{initialState.emailError}</div>

              <StyledLabel>Enter your phone number: </StyledLabel>
              <StyledInput
                name="tel"
                input
                type="tel"
                value={formData.tel}
                onChange={(e) => {
                  setFormData({ ...formData, tel: e.target.value });
                }}
              />
              <div>{initialState.timeError}</div>
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
              <div>{initialState.dateError}</div>
            </StyledForm>
            <StyledContainerBottom>
              <StyledText>
                Accept the terms and conditions of our shop
              </StyledText>
              <Switch />
            </StyledContainerBottom>
          </StyledContainer>
        </StyledSection>
      </TasksContext.Provider>
    </>
  );
}

export default PersonalInfo;
