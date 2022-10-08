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


function DetailInfo({ formData, setFormData }) {
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
            <ButtonRadio.Input
              type="radio"
              value={formData.taste}
              name="taste"
              id="a"
              onChange={(e) => {
                setFormData({ ...formData, taste: e.target.value });
              }}
            />
            <label style={labelStyles} htmlFor="a">
              <ButtonRadio.Indicator></ButtonRadio.Indicator>
              <ButtonRadio.Item>Chocolate</ButtonRadio.Item>
            </label>
          </ButtonRadio>
          <ButtonRadio>
            <ButtonRadio.Input
              type="radio"
              value={formData.taste}
              name="taste"
              id="b"
              onChange={(e) => {
                setFormData({ ...formData, taste: e.target.value });
              }}
            />
            <label style={labelStyles} htmlFor="b">
              <ButtonRadio.Indicator></ButtonRadio.Indicator>
              <ButtonRadio.Item>Vanilla</ButtonRadio.Item>
            </label>
          </ButtonRadio>
          <ButtonRadio>
            <ButtonRadio.Input
              type="radio"
              value={formData.taste}
              name="taste"
              id="c"
              onChange={(e) => {
                setFormData({ ...formData, taste: e.target.value });
              }}
            />
            <label style={labelStyles} htmlFor="c">
              <ButtonRadio.Indicator></ButtonRadio.Indicator>
              <ButtonRadio.Item>Strawberry</ButtonRadio.Item>
            </label>
          </ButtonRadio>
          <ButtonRadio>
            <ButtonRadio.Input
              type="radio"
              value={formData.taste}
              name="taste"
              id="d"
            />
            <label style={labelStyles} htmlFor="d">
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
              value={formData.decoration}
              name="decoration"
              id="e"
              onChange={(e) => {
                console.log(e.target.value);
                setFormData({ ...formData, decoration: e.target.value });
              }}
            />
            <label style={labelStyles} htmlFor="e">
              <ButtonRadio.Indicator></ButtonRadio.Indicator>
              <ButtonRadio.Item>Fondant Icing</ButtonRadio.Item>
            </label>
          </ButtonRadio>
          <ButtonRadio>
            <ButtonRadio.Input
              type="radio"
              value={formData.decoration}
              name="decoration"
              id="f"
              onChange={(e) => {
                console.log(e.target.value);
                setFormData({ ...formData, decoration: e.target.value });
              }}
            />
            <label style={labelStyles} htmlFor="f">
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
