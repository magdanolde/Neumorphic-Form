import React from "react";
import { StyledSection } from "../WelcomePage/WelcomePage.styled";
import { StyledContainer } from "../PersonalInfo/PersonalInfo.styled";
import { StyledText, StyledImg } from "./FinalPage.styled";
import Donut from "../images/Donut.png";

function FinalPage({}) {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledText>
          THANK YOU FOR YOUR ORDER!
          <p>We will contact you as soon as possible!</p>
          <StyledImg src={Donut} alt="Picture" />
        </StyledText>
      </StyledContainer>
    </StyledSection>
  );
}

export default FinalPage;
