import { useState } from "react";
import WeatherContext from "./context";

function Provider({ children }) {

  const [input, setInput] = useState('');
  const [coordinates, setCoordinates] = useState({});

  const store = {
    input,
    coordinates,
    setInput,
    setCoordinates,
  }

  return (
    <WeatherContext.Provider value = { store }>
      { children }
    </WeatherContext.Provider>
  );
};

export default Provider;
