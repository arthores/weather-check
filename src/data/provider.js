import { useState } from "react";
import WeatherContext from "./context";

function Provider({ children }) {

  const [input, setInput] = useState('');
  const [coordinates, setCoordinates] = useState({});
  const [search, setSearch] = useState(false);

  const store = {
    input,
    coordinates,
    search,
    setInput,
    setCoordinates,
    setSearch,
  }

  return (
    <WeatherContext.Provider value = { store }>
      { children }
    </WeatherContext.Provider>
  );
};

export default Provider;
