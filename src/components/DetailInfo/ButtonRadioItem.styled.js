import styled from "styled-components";

const DefaultStyledButtonRadioItem = styled.span`
  font-size: 15px;
  letter-spacing: 1px;
  margin-left: 16px;
`;

const StyledButtonRadioItem = styled(DefaultStyledButtonRadioItem)(
  (props) => props.style
);

export { StyledButtonRadioItem };
