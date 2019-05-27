import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  width: 100%;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-weight: 500;
  background-color: ${props => props.theme.blueColor};
  text-align: center;
  padding: 8px 10px;
  font-size: 14px;
  cursor: pointer;
`;

const Button = ({ text, onClick }) => {
  return <Container onClick={onClick}>{text}</Container>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired
};

export default Button;
