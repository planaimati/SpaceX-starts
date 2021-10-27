import React, { useContext } from "react";
import styled from "styled-components";
import DarkText from "../components/DarkText";
import RescueShips from "../components/RescueShips";
import { AppContext } from "../context/Context";

const RescueTemplate = () => {
  const { missions, counter } = useContext(AppContext);
  const { launchesPast } = missions;

  return (
    <StyledSection>
      <StyledTitleContainer>
        <DarkText>rescue ships</DarkText>
      </StyledTitleContainer>
      <RescueShipsContainer>
        {missions.length === 0
          ? null
          : launchesPast[counter].ships.map((item, index) => {
              return (
                <RescueShips
                  key={index}
                  shipName={item.name}
                  homePort={item.home_port}
                  image={item.image}
                />
              );
            })}
      </RescueShipsContainer>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  margin: 0 auto 30px auto;
  width: 1140px;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledTitleContainer = styled.div`
  height: 55px;
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const RescueShipsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 15px;

  
`;

export default RescueTemplate;
