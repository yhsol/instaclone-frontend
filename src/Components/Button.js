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
  padding: 8px 0px;
  font-size: 14px;
`;

const Button = ({ text }) => {
  return <Container>{text}</Container>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired
};

export default Button;
