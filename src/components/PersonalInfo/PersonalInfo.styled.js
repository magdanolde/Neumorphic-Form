import styled from "styled-components";

export const StyledInput = styled.input`
  letter-spacing: 0.15px;
  border: none;
  outline: none;
  background-color: #ecf0f3;
  border-radius: 8px;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
  margin-left: 10px;
  width: 90%;
  height: 30px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`;

export const StyledLabel = styled.label`
  padding-top: 10px;
  font-size: 0.9rem;
`;

export const StyledContainerBottom = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
`;

export const StyledTitle = styled.h1`
  color: pink;
  font-size: 1.5rem;
`;

export const StyledText = styled.p`
  font-size: 0.9rem;
  margin-right: 20px;
`;
