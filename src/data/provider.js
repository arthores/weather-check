import React, { useState } from "react";
import WeatherContext from "./context";

function Provider({ children }) {

  const [input, setInput] = useState('');
  const [coordinates, setCoordinates] = useState({});
  const [search, setSearch] = useState(false);
  const [api, setApi] = useState({});
  const [actualTemp, setTemp] = useState('');
  const [typeTemp, setType] = useState("C");

  const store = {
    input,
    coordinates,
    search,
    api,
    actualTemp,
    typeTemp,
    setInput,
    setCoordinates,
    setSearch,
    setApi,
    setTemp,
    setType,
  }

  return (
    <WeatherContext.Provider value = { store }>
      { children }
    </WeatherContext.Provider>
  );
};

export default Provider;
