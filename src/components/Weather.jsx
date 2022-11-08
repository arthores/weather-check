import React, { useContext } from "react";
import WeatherContext from "../data/context";
import { weatherIcon } from "../data/icons";
import { temp } from "../api/funcs";
import '../styles/weatherInfo.css';

function Weather () {

  const {
    api,
  } = useContext(WeatherContext);

  const weather = api.weather[0].main;

  const filterIcon = weatherIcon.filter((e) => e.weather === weather ? e : e[0]);
  const icon = filterIcon.length > 0 ? filterIcon[0].icon : null;

  return (
    <section
      className="weather-section"
    >
      <aside
        className="weather-aside"
      >
        <div
          className="temp-box"
        >
          <p
            className="temp"
          >
            { `${temp(api.main.temp)[0]}` }
            <p
              className="temp-max-min"
            >
              { `${temp(api.main.temp_max)[0]}  ${temp(api.main.temp_min)[0]}` }
            </p>
          </p>
          <img src={ icon } alt={ `${weather} icon` } className="temp-icon"/>
        </div>
        <div
          className="city-box"
        >
          { api.name }
        </div>
      </aside>
      <aside
        className="btn-aside"
      >
        <button>
          C
        </button>
      </aside>
    </section>
  )
}

export default Weather;
