import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  background-color: #8884d8;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const DateFormatButton = ({ onClick }) => (
  <StyledButton onClick={onClick}>Change Date Format</StyledButton>
);

DateFormatButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DateFormatButton;
