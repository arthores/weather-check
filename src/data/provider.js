import { useState } from "react";
import WeatherContext from "./context";

function Provider({ children }) {

  const [teste, useTeste] = useState('');

  const store = {
    teste,
    useTeste,
  }

  return (
    <WeatherContext.Provider value = { store }>
      { children }
    </WeatherContext.Provider>
  );
};

export default Provider;
