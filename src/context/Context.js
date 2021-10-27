import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { FILMS_QUERY } from "../utils/query";

export const AppContext = React.createContext();
export const AppContextProvider = ({ children }) => {
  //state
  const [missions, setMissions] = useState([]);
  const [counter, setCounter] = useState(0);

  //pobieranie danych z APi
  const { data, loading, error } = useQuery(FILMS_QUERY);

  useEffect(() => {
    if (!loading && data) {
      setMissions(data);
    }
  }, [loading, data]);

  if (error) return `Error! ${error.message}`;

  //counter

  const increaseCounter = () => {
    

    if (missions.launchesPast.length - 1 === counter) {
      return;
    } else {
      setCounter((prevState) => prevState + 1);
    }
  };
  const decreaseCounter = () => {
    
    if (counter === 0) {
      return;
    } else {
      setCounter((prevState) => prevState - 1);
    }
  };

  return (
    <AppContext.Provider
      value={{
        missions,
        counter,
        increaseCounter,
        decreaseCounter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
