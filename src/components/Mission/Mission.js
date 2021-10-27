import React from "react";
import styled from "styled-components";

import DarkText from "../DarkText";
import WhiteText from "../WhiteText";
import BigText from "../BigText";
import Button from "../Button";

const MissionTemplate = (props) => {
  const { missionName, launchDate, siteName, rocketName } = props;

  const newDate = launchDate;
  return (
    <StyledContainer>
      <StyledDescriptionContainer site="left">
        <StyledTextContainer site="left">
          <DarkText>mission</DarkText>
          <BigText>{missionName}</BigText>
        </StyledTextContainer>
        <StyledTextContainer site="left">
          <DarkText>rocket</DarkText>
          <WhiteText>{rocketName}</WhiteText>
        </StyledTextContainer>
        <Button>learn more</Button>
      </StyledDescriptionContainer>
      <StyledDescriptionContainer>
        <StyledTextContainer>
          <DarkText>launch date</DarkText>
          <WhiteText>{newDate}</WhiteText>
        </StyledTextContainer>
        <StyledTextContainer>
          <DarkText>launch site</DarkText>
          <WhiteText>{siteName}</WhiteText>
        </StyledTextContainer>
      </StyledDescriptionContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }
`;

const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.site === "left" ? "flex-start" : "flex-end"};
  justify-content: space-between;

  @media (max-width: 768px) {
    align-items: flex-start;
    width: 100%;
  }
`;

const StyledTextContainer = styled.div`
  display: flex;
  align-items: ${(props) =>
    props.site === "left" ? "flex-start" : "flex-end"};
  justify-content: center;
  flex-direction: column;
  margin-bottom: 23px;
  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export default MissionTemplate;
