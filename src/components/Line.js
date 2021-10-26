import React from "react";
import styled from "styled-components";

const Line = () => {
  return <StyledLine />;
};

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background: #5c5c5d;
  align-self: flex-end;
`;

export default Line;
