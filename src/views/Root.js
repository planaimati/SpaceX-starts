import React from "react";
import GlobalStyle from "../theme/GlobalStyle";
import NavigationView from "./NavigationView";
import MissionView from "./MissionView";
import RescueView from "./RescueView";

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <NavigationView />
      <MissionView />
      <RescueView />
    </>
  );
};

export default Root;
