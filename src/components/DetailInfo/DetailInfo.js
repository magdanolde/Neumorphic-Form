import React from "react";
import { StyledSection } from "../WelcomePage/WelcomePage.styled";
import { StyledContainer } from "../PersonalInfo/PersonalInfo.styled";
import {
  StyledContainerRadio,
  StyledImage,
  StyledTitleRadio,
  StyledTitleSection,
} from "./DetailInfo.styled";
import ButtonRadio from "./ButtonRadio";
import CakePiece from "../images/CakePiece.png";

function DetailInfo() {
  const labelStyles = {
    display: "flex",
    alignItems: "center",
  };
  return (
    <StyledSection>
      <StyledContainer>
        <StyledTitleSection>PICK THE DETAILS</StyledTitleSection>
        <StyledTitleRadio>Pick your flavor</StyledTitleRadio>

        <StyledContainerRadio>
          <ButtonRadio>
            <ButtonRadio.Input type="radio" value="a" name="taste" id="a" />
            <label style={labelStyles} for="a">
              <ButtonRadio.Indicator></ButtonRadio.Indicator>
              <ButtonRadio.Item>Chocolate</ButtonRadio.Item>
            </label>
          </ButtonRadio>
          <ButtonRadio>
            <ButtonRadio.Input type="radio" value="b" name="taste" id="b" />
            <label style={labelStyles} for="b">
              <ButtonRadio.Indicator></ButtonRadio.Indicator>
              <ButtonRadio.Item>Vanilla</ButtonRadio.Item>
            </label>
          </ButtonRadio>
          <ButtonRadio>
            <ButtonRadio.Input type="radio" value="c" name="taste" id="c" />
            <label style={labelStyles} for="c">
              <ButtonRadio.Indicator></ButtonRadio.Indicator>
              <ButtonRadio.Item>Strawberry</ButtonRadio.Item>
            </label>
          </ButtonRadio>
          <ButtonRadio>
            <ButtonRadio.Input type="radio" value="d" name="taste" id="d" />
            <label style={labelStyles} for="d">
              <ButtonRadio.Indicator></ButtonRadio.Indicator>
              <ButtonRadio.Item>Raspberry</ButtonRadio.Item>
            </label>
          </ButtonRadio>
        </StyledContainerRadio>
        <StyledTitleRadio>Pick your decorations</StyledTitleRadio>
        <StyledContainerRadio>
          <ButtonRadio>
            <ButtonRadio.Input
              type="radio"
              value="e"
              name="decoration"
              id="e"
            />
            <label style={labelStyles} for="e">
              <ButtonRadio.Indicator></ButtonRadio.Indicator>
              <ButtonRadio.Item>Fondant Icing</ButtonRadio.Item>
            </label>
          </ButtonRadio>
          <ButtonRadio>
            <ButtonRadio.Input
              type="radio"
              value="f"
              name="decoration"
              id="f"
            />
            <label style={labelStyles} for="f">
              <ButtonRadio.Indicator></ButtonRadio.Indicator>
              <ButtonRadio.Item>Royal Icing</ButtonRadio.Item>
            </label>
          </ButtonRadio>
        </StyledContainerRadio>
        <StyledImage src={CakePiece} />
      </StyledContainer>
    </StyledSection>
  );
}

export default DetailInfo;
