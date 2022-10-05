import styled from "styled-components";

export const StyledSection = styled.section`
  position: relative;
  width: 1000px;
  min-width: 1000px;
  min-height: 600px;
  height: 600px;
  padding: 25px;
  backgroundcolor: #ecf0f3;
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  border-radius: 12px;
  overflow: hidden;
`;

export const StyledDivContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 45%;
  height: 100%;
  padding: 25px;
  backgroundcolor: #ecf0f3;
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  color: pink;
  font-size: 3rem;
`;

export const StyledDivContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  padding: 25px;
  backgroundcolor: #ecf0f3;
`;

export const StyledImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const StyledForm = styled.form`
  font-size: 1.5rem;
  margin: 30px;
`;

export const StyledSelectBottom = styled.select`
  letter-spacing: 0.15px;
  border: none;
  outline: none;
  background-color: #ecf0f3;
  border-radius: 8px;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
  margin-left: 10px;
  width: 200px;
  height: 35px;
`;

export const StyledSeclectTop = styled.select`
  letter-spacing: 0.15px;
  border: none;
  outline: none;
  background-color: #ecf0f3;
  border-radius: 8px;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
  margin-left: 10px;
  width: 135px;
  height: 35px;
`;
