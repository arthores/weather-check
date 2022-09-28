import React, { useContext } from "react";
import WeatherContext from "../data/context";
import searchLogo from '../icons/searchLogo.png';
import '../styles/weatherInfo.css';

function Weather () {

  const {
    api,
  } = useContext(WeatherContext);

  const weatherIcon = [
    {
      weather: 'Clear',
      icon: searchLogo
    },
  ];

  const renderCondition = Object.keys(api).length;

    console.log();
  return (
    <section
      className="weather-section"
    >
      <aside
        className="temp-aside"
      >
        <button>
          C
        </button>
      </aside>
      <aside
        className="weather-aside"
      >
        <div
          className="temp-box"
        >
          <p>{ renderCondition > 0 ? api.main.temp : null }</p>
          { renderCondition > 0 ? weatherIcon.map((e) => {
            // console.log('------aqui------');
            if (e.weather === api.weather[0].main) {
              // console.log(e.weather);
              console.log(e.icon);
              console.log(api.weather[0].main);
              return <img src={ e.icon } alt="" />
            };
          }) : <i className="fi fi-rr-search" />}
        </div>
        <div
          className="city-box"
        >
          { api.name }
        </div>
      </aside>
    </section>
  )
}

export default Weather;
