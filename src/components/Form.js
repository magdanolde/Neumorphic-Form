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
import { TasksContext } from "..//components/PersonalInfo/context";
import FinalPage from "./FinalPage/FinalPage";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    date: "",
    decoration: "",
    taste: "",
    selectValue: "",
    selectValueOcassion: "",
    accept: false,
  });
  const [error, setError] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    dateError: "",
    timeError: "",
    checkBoxError: "",
  });

  const FormTitles = ["Welcome Page", "Detail Info", "Personal", "Final"];

  const pages = [WelcomePage, DetailInfo, PersonalInfo, FinalPage];
  const Component = pages[page];

  const validateInput = () => {
    let firstNameError = "";
    let lastNameError = "";
    let emailError = "";
    let telError = "";
    let dateError = "";
    let checkBoxError = "";
    const regexdate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
    const regexphone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (formData.firstName.length < 2) {
      firstNameError = "Minimum two signs are required";
    }
    if (formData.lastName.length < 2) {
      lastNameError = "Minimum two signs are required";
    }
    if (!formData.email.includes("@")) {
      emailError = "Invalid email";
    }
    if (!regexphone.test(formData.telephone)) {
      telError = "Invalid telephone format";
    }
    if (!regexdate.test(formData.date)) {
      dateError = "Invalid time format";
    }
    if (formData.accept === false) {
      checkBoxError = "You have to accept terms and conditions";
    }
    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      telError ||
      dateError ||
      checkBoxError
    ) {
      setError({
        firstNameError,
        lastNameError,
        emailError,
        telError,
        dateError,
        checkBoxError,
      });
      return false;
    }
    return true;
  };

  return (
    <>
      <TasksContext.Provider
        value={{
          error,
        }}
      >
        <StyledSection>
          <StyledProgressBar>
            <StyledProgressBarInside
              style={{
                width:
                  page === 0
                    ? "25%"
                    : page === 1
                    ? "50%"
                    : page === 2
                    ? "75%"
                    : "99%",
              }}
            ></StyledProgressBarInside>
          </StyledProgressBar>
          <div>
            <Component setFormData={setFormData} formData={formData} />
            <StyledFooter>
              <StyledButton
                style={
                  page === FormTitles.length - 1 ||
                  page === FormTitles.length - 4
                    ? { display: "none" }
                    : { display: "block" }
                }
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                PREV
              </StyledButton>
              <StyledButton
                style={
                  page === FormTitles.length - 1
                    ? { display: "none" }
                    : { display: "block" }
                }
                onClick={() => {
                  if (page === 2) {
                    const isValid = validateInput();
                    if (isValid) {
                      setPage((currPage) => currPage + 1);
                    }
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                {page === FormTitles.length - 2 ? "SUBMIT" : "NEXT"}
              </StyledButton>
            </StyledFooter>
          </div>
        </StyledSection>
      </TasksContext.Provider>
    </>
  );
}

export default Form;
