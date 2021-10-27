import React from "react";
import styled from "styled-components";

const BigText = (props) => {
  const { children } = props;

  return <StyledBigText>{children}</StyledBigText>;
};

const StyledBigText = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 49px;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export default BigText;
