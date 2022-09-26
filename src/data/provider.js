import { useState } from "react";
import WeatherContext from "./context";

function Provider({ children }) {

  const [input, setInput] = useState('');

  const store = {
    input,
    setInput,
  }

  return (
    <WeatherContext.Provider value = { store }>
      { children }
    </WeatherContext.Provider>
  );
};

export default Provider;
