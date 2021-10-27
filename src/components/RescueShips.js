import React from "react";
import styled from "styled-components";

const RescueShips = (props) => {
  const { shipName, homePort, image } = props;
  return (
    <StyledContainer>
      <StyledImageContainer>
        <StyledImage src={image} />
      </StyledImageContainer>
      <StyledDescContainer>
        <StyledTitle>{shipName}</StyledTitle>
        <StyledLine />
        <StyledInfoContainer>
          <StyledInfoText>home port</StyledInfoText>
          <StyledInfoTextDark>{homePort}</StyledInfoTextDark>
        </StyledInfoContainer>
      </StyledDescContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin-top: 20px;
  height: 340px;
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 345px;
  }
`;

const StyledImageContainer = styled.div`
  height: 200px;
  width: 360px;
  @media (max-width: 768px) {
    width: 345px;
  }
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 20px 20px 0 0;
`;

const StyledDescContainer = styled.div`
  height: 150px;
  width: 100%;
  background: #ffffff;
  border-radius: 0 0 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 15px 15px 15px;
`;

const StyledLine = styled.div`
  width: 330px;
  height: 1px;
  background: #e8e8e8;
  align-self: center;
`;

const StyledTitle = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 62px;
  color: #000000;
`;

const StyledInfoContainer = styled.div`
  height: 82px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-self: flex-start;
`;

const StyledInfoText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #868686;
  margin-right: 20px;
`;

const StyledInfoTextDark = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
`;

export default RescueShips;
