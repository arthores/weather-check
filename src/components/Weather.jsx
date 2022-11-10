import React, { useContext } from "react";
import WeatherContext from "../data/context";
import { weatherIcon } from "../data/icons";
import { temp } from "../api/funcs";
import '../styles/weatherInfo.css';
import { useEffect } from "react";
import WeatherBtn from "./WeatherBtn";

function Weather () {

  const {
    api,
    setTemp,
    typeTemp,
  } = useContext(WeatherContext);

  useEffect(()=> {
    setTemp(temp(api.main.temp, typeTemp));
  }, [api])

  const weather = api.weather[0].main;

  const filterIcon = weatherIcon.filter((e) => e.weather === weather ? e : e[0]);
  const icon = filterIcon.length > 0 ? filterIcon[0].icon : null;

  console.log(typeTemp);

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
            { `${temp(api.main.temp, typeTemp)}°${typeTemp}` }
            <p
              className="temp-max-min"
            >
              { `${temp(api.main.temp_max, typeTemp) }°${typeTemp} / ${temp(api.main.temp_min, typeTemp)}°${typeTemp}` }
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
        <WeatherBtn value="C" />
        <WeatherBtn value="F" />
      </aside>
    </section>
  )
}

export default Weather;
