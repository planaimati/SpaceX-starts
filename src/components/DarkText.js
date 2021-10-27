import React from "react";
import styled from "styled-components";

const DarkText = (props) => {
  const { children } = props;
  return <StyledText>{children}</StyledText>;
};

const StyledText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  text-align: right;
  text-transform: uppercase;
  color: #868686;
  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 16px;
  }
`;

export default DarkText;
