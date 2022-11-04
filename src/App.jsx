import React, { useContext, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherContext from "./data/context";
import { getWeather } from "./api/funcs";
import Weather from "./components/Weather";
import Elements from "./components/Elements";
import './styles/weather.css'

function App () {

  const {
    coordinates,
    search,
    setSearch,
    setApi,
    api,
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

  const renderCondition = Object.keys(api).length;

  return (
    <main
      className="main-box"
    >
      <section
        className="section-box"
      >
         { renderCondition > 0 ? <Weather /> : null }
         <SearchBar />
         { renderCondition > 0 ? <Elements /> : null }
      {/* <div>
        Futura fetuare de mudança de idioma
      </div> */}
      </section>
    </main>
  )
}

export default App;
