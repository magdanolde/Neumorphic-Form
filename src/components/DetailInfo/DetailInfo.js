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
              value="Chocolate"
              name="taste"
              id="a"
              checked={formData.taste === "Chocolate"}
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
              value="Vanilla"
              name="taste"
              id="b"
              checked={formData.taste === "Vanilla"}
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
              value="Strawberry"
              name="taste"
              id="c"
              checked={formData.taste === "Strawberry"}
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
              value="Raspberry"
              name="taste"
              id="d"
              checked={formData.taste === "Raspberry"}
              onChange={(e) => {
                setFormData({ ...formData, taste: e.target.value });
              }}
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
              value="Fondant Icing"
              name="decoration"
              checked={formData.decoration === "Fondant Icing"}
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
              value="Royal Icing"
              name="decoration"
              id="f"
              checked={formData.decoration === "Royal Icing"}
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
