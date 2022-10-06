import React, { useState } from "react";
import WelcomePage from "./WelcomePage/WelcomePage";
import DetailInfo from "./DetailInfo/DetailInfo";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import {
  StyledSection,
  StyledProgressBar,
  StyledProgressBarInside,
  StyledFooter,
  StyledButton,
} from "./Form.styled";

function Form() {
  const [page, setPage] = useState(0);
  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const displayPage = () => {
    if (page === 0) {
      return <WelcomePage />;
    } else if (page === 1) {
      return <DetailInfo />;
    } else {
      return <PersonalInfo />;
    }
  };
  return (
    <StyledSection>
      <StyledProgressBar>
        <StyledProgressBarInside
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "99%" }}
        ></StyledProgressBarInside>
      </StyledProgressBar>
      <div>
        <div>{displayPage()}</div>
        <StyledFooter>
          <StyledButton
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            PREV
          </StyledButton>
          <StyledButton
            style={buttonStyles}
            disabled={page === FormTitles.length - 1}
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            {page === FormTitles.length - 1 ? "SUBMIT" : "NEXT"}
          </StyledButton>
        </StyledFooter>
      </div>
    </StyledSection>
  );
}

export default Form;
