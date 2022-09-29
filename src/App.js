import React, { useContext, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherContext from "./data/context";
import { getWeather } from "./api/funcs";
import Weather from "./components/Weather";
import './styles/weather.css'
import Elements from "./components/Elements";

function App () {

  const {
    coordinates,
    search,
    setSearch,
    setApi,
  } = useContext(WeatherContext);

  useEffect(() => {
    if (search === true) {
      setTimeout(async () => {
        const result = await getWeather(coordinates.lan, coordinates.lon);
        setApi(result)
      }, 1000);
    };
    setSearch(false);
  }, [search]);

  return (
    <main
      className="main-box"
    >
      <section
        className="section-box"
      >
         <Weather />
         <SearchBar />
         <Elements />
      {/* <div>
        Futura fetuare de mudança de idioma
      </div> */}
      </section>
    </main>
  )
}

export default App;
