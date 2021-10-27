import React, { useContext } from "react";
import styled from "styled-components";

//context

//components
import Line from "../components/Line";

//assets
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Logo2 } from "../assets/logo2.svg";
import { ArrowIosBackOutline } from "@styled-icons/evaicons-outline/ArrowIosBackOutline";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline/ArrowIosForwardOutline";
import { AppContext } from "../context/Context";

const NavigationTemplate = () => {
  const { increaseCounter, decreaseCounter, counter, missions } =
    useContext(AppContext);

  const missionsLength =
    missions.length === 0 ? null : missions.launchesPast.length - 1;

  return (
    <StyledNav>
      <StyledWrapper>
        <StyledArrowLeft
          size="40"
          onClick={decreaseCounter}
          counter={counter}
        />
        <StyledLogoContainer>
          <StyledIcon></StyledIcon>
          <StyledIcon2></StyledIcon2>
        </StyledLogoContainer>
        <StyledArrowRight
          size="40"
          onClick={increaseCounter}
          counter={counter}
          missions={missionsLength}
        />
      </StyledWrapper>

      <Line />
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 1140px;
  height: 150px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 85px;
  }
`;

const StyledWrapper = styled.div`
  margin-top: 30px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const StyledLogoContainer = styled.div`
  height: 36.68px;
  width: 300px;
  display: flex;
  align-items: flex-end;
  position: relative;
  @media (max-width: 768px) {
    height: 16px;
    width: 164px;
  }
`;

const StyledIcon = styled(Logo)`
  width: 247.25px;
  height: 24.15px;
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`;

const StyledIcon2 = styled(Logo2)`
  position: absolute;
  width: 95.85px;
  height: 36.6px;
  left: 200px;

  @media (max-width: 768px) {
    height: 63px;
    width: 30%;
    left: 134px;
    top: -25px;
  }
`;

const StyledArrowLeft = styled(ArrowIosBackOutline)`
  color: ${(props) => (props.counter === 0 ? "#5C5C5D" : "#f4f6fa")};
  cursor: pointer;
  @media (max-width: 768px) {
    height: 24px;
  }
`;

const StyledArrowRight = styled(ArrowIosForwardOutline)`
  color: ${(props) =>
    props.counter === props.missions ? "#5C5C5D" : "#f4f6fa"};
  cursor: pointer;
  @media (max-width: 768px) {
    height: 24px;
  }
`;

export default NavigationTemplate;
