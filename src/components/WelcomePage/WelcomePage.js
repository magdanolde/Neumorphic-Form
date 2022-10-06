import React from "react";
import Cupcake from "../images/Cupcake.png";
import {
  StyledSection,
  StyledDivContainerLeft,
  StyledDivContainerRight,
  StyledImg,
  StyledForm,
  StyledSelectBottom,
  StyledSeclectTop,
} from "./WelcomePage.styled";

function WelcomePage() {
  return (
    <StyledSection>
      <StyledDivContainerLeft>
        Welcome to our bakery!
        <StyledImg src={Cupcake} alt="Picture" />
      </StyledDivContainerLeft>
      <StyledDivContainerRight>
        <StyledForm>
          <label>
            Choose occasion
            <StyledSeclectTop>
              <option value=""></option>
              <option value="Wedding">Wedding</option>
              <option value="Birthsday">Birthsday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Welcome">New Job</option>
            </StyledSeclectTop>
          </label>
        </StyledForm>
        <StyledForm>
          <label>
            Choose size
            <StyledSelectBottom>
              <option value=""></option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Big">Big</option>
            </StyledSelectBottom>
          </label>
        </StyledForm>
      </StyledDivContainerRight>
    </StyledSection>
  );
}

export default WelcomePage;
