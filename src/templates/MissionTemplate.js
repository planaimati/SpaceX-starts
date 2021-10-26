import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/Context";
import Line from "../components/Line";

const MissionTemplate = () => {
  const { missions } = useContext(AppContext);

  console.log(missions);

  return (
    <StyledSection>
      <Line />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  margin: 0 auto;
  height: 400px;
  width: 1140px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MissionTemplate;
