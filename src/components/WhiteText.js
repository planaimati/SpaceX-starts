import React from "react";
import styled from "styled-components";

const WhiteText = (props) => {
  const { children } = props;
  return <StyledText>{children}</StyledText>;
};

const StyledText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: right;
  color: #ffffff;
  margin-top: 8px;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

export default WhiteText;
