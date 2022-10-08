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

function WelcomePage({ formData, setFormData }) {
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
            <StyledSeclectTop
              value={formData.selectValueOcassion}
              onChange={(e) => {
                console.log(e.target.value);
                setFormData({
                  ...formData,
                  selectValueOcassion: e.target.value,
                });
              }}
            >
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
            <StyledSelectBottom
              value={formData.selectValue}
              onChange={(e) => {
                console.log(e.target.value);
                setFormData({ ...formData, selectValue: e.target.value });
              }}
            >
              {" "}
              <option value=""></option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="big">Big</option>
            </StyledSelectBottom>
          </label>
        </StyledForm>
      </StyledDivContainerRight>
    </StyledSection>
  );
}

export default WelcomePage;
