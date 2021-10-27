import React, { useContext } from "react";
import styled from "styled-components";
import Line from "../components/Line";
import { AppContext } from "../context/Context";
import Mission from "../components/Mission/Mission";

const MissionTemplate = () => {
  const { missions, counter } = useContext(AppContext);

  const { launchesPast } = missions;

  if (missions.length === 0) {
    return (
      <StyledSection>
        <Line />
      </StyledSection>
    );
  } else {
    return (
      <StyledSection>
        <Mission
          missionName={launchesPast[counter].mission_name}
          launchDate={launchesPast[counter].launch_date_local}
          siteName={launchesPast[counter].launch_site.site_name}
          rocketName={launchesPast[counter].rocket.rocket_name}
        />
        <Line />
      </StyledSection>
    );
  }
};

const StyledSection = styled.section`
  margin: 0 auto;
  height: 400px;
  width: 1140px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    height: 500px;

    align-items: flex-start;
  }
`;

export default MissionTemplate;
