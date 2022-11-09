import React, { useContext } from "react";
import WeatherContext from "../data/context";
import { weatherIcon } from "../data/icons";
import { temp } from "../api/funcs";
import '../styles/weatherInfo.css';
import { useEffect } from "react";

function Weather () {

  const {
    api,
    setTemp,
  } = useContext(WeatherContext);

  useEffect(()=> {
    setTemp(temp(api.main.temp, "C"));
  }, [api])

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
            { `${temp(api.main.temp, "C")}` }
            <p
              className="temp-max-min"
            >
              { `${temp(api.main.temp_max, "C")} / ${temp(api.main.temp_min, "C")}` }
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
