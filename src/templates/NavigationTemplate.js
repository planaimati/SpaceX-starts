import React from "react";
import styled from "styled-components";

//components
import Line from "../components/Line";

//assets
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Logo2 } from "../assets/logo2.svg";
import { ArrowIosBackOutline } from "@styled-icons/evaicons-outline/ArrowIosBackOutline";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline/ArrowIosForwardOutline";

const NavigationTemplate = () => {
  return (
    <StyledNav>
      <StyledWrapper>
        <StyledArrowLeft size="40" />
        <StyledLogoContainer>
          <StyledIcon></StyledIcon>
          <StyledIcon2></StyledIcon2>
        </StyledLogoContainer>
        <StyledArrowRight size="40" />
      </StyledWrapper>

      <Line />
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 1140px;
  height: 150px;
  margin: 0 auto;
`;

const StyledWrapper = styled.div`
  margin-top: 30px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledLogoContainer = styled.div`
  height: 36.68px;
  width: 300px;
  display: flex;
  align-items: flex-end;
  position: relative;
`;

const StyledIcon = styled(Logo)`
  width: 247.25px;
  height: 24.15px;
`;

const StyledIcon2 = styled(Logo2)`
  position: absolute;
  width: 95.85px;
  height: 36.6px;
  left: 200px;
`;

const StyledArrowLeft = styled(ArrowIosBackOutline)`
  color: #f4f6fa;
  cursor: pointer;
`;

const StyledArrowRight = styled(ArrowIosForwardOutline)`
  color: #f4f6fa;
  cursor: pointer;
`;

export default NavigationTemplate;
