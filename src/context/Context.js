import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { FILMS_QUERY } from "../utils/query";

export const AppContext = React.createContext();
export const AppContextProvider = ({ children }) => {
  //state
  const [missions, setMissions] = useState([]);
  const [counter, setCounter] = useState(0);

  const { data, loading, error } = useQuery(FILMS_QUERY);

  useEffect(() => {
    if (!loading && data) {
      setMissions(data);
    }
  }, [loading, data]);

  if (error) return `Error! ${error.message}`;

  //pobieranie danych z APi

  return (
    <AppContext.Provider
      value={{
        missions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
