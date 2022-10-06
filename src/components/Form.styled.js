import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ecf0f3;
  color: #a0a5a8;
`;

export const StyledProgressBar = styled.div`
  width: 600px;
  height: 30px;
  background-color: white;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  border-radius: 10px;
  box-shadow: inset -3px -3px 7px #ffffffb0,
    inset 3px 3px 5px rgba(94, 104, 121, 0.692);
`;

export const StyledProgressBarInside = styled.div`
  background-color: pink;
  width: 33.3%;
  height: 80%;
  border-radius: 10px;
  margin-left: 3px;
`;

export const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  background-color: pink;
  border-radius: 15px;
  width: 150px;
  height: 35px;
  margin-left: 5px;
  margin-top: 40px;
  color: white;
  border-style: solid;
  box-shadow: 8px 8px 16px #pink, -8px -8px 16px #f9f9f9;
`;
