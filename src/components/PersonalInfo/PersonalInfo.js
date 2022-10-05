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

function PersonalInfo() {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledTitle>COMPLETE YOUR ORDER</StyledTitle>
        <StyledForm>
          <StyledLabel>Enter your name: </StyledLabel>
          <StyledInput
            name="firstName"
            type="text"
            // value={firstName}
            // onChange={this.inputChange}
          />
          {/* <div className="form__error">{this.state.firstNameError}</div> */}
          <StyledLabel>Enter your lastname: </StyledLabel>
          <StyledInput
            name="lastName"
            type="text"
            // value={lastName}
            // onChange={this.inputChange}
          />
          {/* <div className="form__error">{this.state.lastNameError}</div> */}
          <StyledLabel>Enter your email: </StyledLabel>
          <StyledInput
            name="email"
            type="email"
            // value={email}
            // onChange={this.inputChange}
          />
          {/* <div className="form__error">{this.state.emailError}</div> */}

          <StyledLabel>Enter your phone number: </StyledLabel>
          <StyledInput
            name="tel"
            input
            type="tel"
            // value={tel}
            // onChange={this.inputChange}
          />
          {/* <div className="form__error">{this.state.timeError}</div> */}
          <StyledLabel>Enter the desired date of delivery: </StyledLabel>
          <StyledInput
            name="date"
            input
            type="date"
            // value={date}
            // onChange={this.inputChange}
          />
          {/* <div className="form__error">{this.state.dateError}</div> */}
        </StyledForm>
        <StyledContainerBottom>
          <StyledText>Accept the terms and conditions of our shop</StyledText>
          <Switch />
        </StyledContainerBottom>
      </StyledContainer>
    </StyledSection>
  );
}

export default PersonalInfo;
