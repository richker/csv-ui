import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 5px;
  padding: 0 15px;
  font-size: 16px;
  color: #333;
  background-color: #f2f2f2;
  transition: all 0.3s ease-in-out;
  outline: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  &:focus {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;
  }
`;

const DateInput = ({ value, onChange }) => (
  <StyledInput type="date" value={value} onChange={onChange} />
);

export default DateInput;
