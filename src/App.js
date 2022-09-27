import React, { useContext, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherContext from "./data/context";
import { getWeather } from "./api/funcs";
import WeatherElements from "./components/WeatherElements";
import './styles/weather.css'

function App () {

  const {
    coordinates,
    search,
    setSearch,
  } = useContext(WeatherContext);

  useEffect(() => {
    if (search === true) {
      setTimeout(async () => {
        const result = await getWeather(coordinates.lan, coordinates.lon);
        console.log(result);
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
        <p> {coordinates.city} </p>
         <SearchBar />
         <aside>
          <WeatherElements />
          <WeatherElements />
        </aside>
        <aside>
          <WeatherElements />
          <WeatherElements />
        </aside>
      </section>
      {/* <div>
        Futura fetuare de mudança de idioma
      </div> */}
    </main>
  )
}

export default App;
