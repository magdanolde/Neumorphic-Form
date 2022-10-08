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
import { useContext } from "react";
import { TasksContext } from "..//components/PersonalInfo/context";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    date: "",
    decoration: "",
    taste: "",
    selectValue: "",
    selectValueOcassion: "",
  });
  // const { validateInput } = useContext(TasksContext);

  const FormTitles = ["Welcome Page", "Detail Info", "Personal"];

  const displayPage = () => {
    if (page === 0) {
      return <WelcomePage formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <DetailInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <>
      <StyledSection>
        <StyledProgressBar>
          <StyledProgressBarInside
            style={{
              width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "99%",
            }}
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
              onClick={() => {
                // const isValid = validateInput();
                if (page === FormTitles.length - 1) {
                  alert("You successfully submitted the form");
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "SUBMIT" : "NEXT"}
            </StyledButton>
          </StyledFooter>
        </div>
      </StyledSection>
    </>
  );
}

export default Form;
