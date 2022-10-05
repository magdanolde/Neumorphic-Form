import React, { useState } from "react";
import WelcomePage from "./WelcomePage/WelcomePage";
import DetailInfo from "./DetailInfo/DetailInfo";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const bodyStyles = {
  margin: "0",
  padding: "0",
  boxSizing: "border-box",
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "sans-serif",
  fontSize: "12px",
  backgroundColor: "#ecf0f3",
  color: "#a0a5a8",
};

const footerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const buttonStyles = {
  backgroundColor: "pink",
  borderRadius: "15px",
  width: "150px",
  height: "35px",
  marginLeft: "5px",
  marginTop: "40px",
  color: "white",
  borderStyle: "solid",
};

const progressStyles = {
  width: "600px",
  height: "30px",
  backgroundColor: "white",
  marginBottom: "50px",
  borderRadius: "10px",
  boxShadow:
    "inset -3px -3px 7px #ffffffb0, inset 3px 3px 5px rgba(94, 104, 121, 0.692)",
};

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
    <div style={bodyStyles}>
      <div style={progressStyles}>
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="body">{displayPage()}</div>
        <div style={footerStyles}>
          <button
            style={buttonStyles}
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            PREV
          </button>
          <button
            style={buttonStyles}
            disabled={page === FormTitles.length - 1}
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            {page === FormTitles.length - 1 ? "SUBMIT" : "NEXT"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
