import styled from "styled-components";

const DefaultButtonRadioIndicator = styled.div`
  position: relative;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 10%;
    left: 10%;
    height: 80%;
    width: 80%;
    border-radius: 50%;
  }

  &::before {
    box-shadow: -4px -2px 4px 0px #d1d9e6, 4px 2px 8px 0px #fff;
  }

  &::after {
    background-color: #ecf0f3;
    box-shadow: -4px -2px 4px 0px #fff, 4px 2px 8px 0px #d1d9e6;
    transform: scale3d(1, 1, 1);
    transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
  }
`;
export { DefaultButtonRadioIndicator };
