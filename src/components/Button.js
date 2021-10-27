import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { children } = props;

  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  padding: 19px 37px 19px 37px;
  text-transform: uppercase;
  background-color: transparent;
  border: 2px solid #ffffff;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
    align-self: center;
  }
`;

export default Button;
