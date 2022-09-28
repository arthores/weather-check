import React, { useContext } from "react";
import WeatherContext from "../data/context";
import sunny from '../icons/sunny.png';
import cloudsNight from '../icons/cloudsNight.png'
import '../styles/weatherInfo.css';

function Weather () {

  const {
    api,
  } = useContext(WeatherContext);

  const weatherIcon = [
    {
      weather: 'Clear',
      icon: sunny
    },
    {
      weather: 'Clouds',
      icon: cloudsNight
    },
  ];

  const renderCondition = Object.keys(api).length;
  const weather = renderCondition > 0 ? api.weather[0].main : null;

  const caseIcon = weatherIcon.filter((e) => e.weather === weather);
  const icon = caseIcon.length > 0 ? caseIcon[0].icon : null;
  console.log(caseIcon);

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
          {renderCondition > 0 ? <img src={ icon } alt={ weather } /> : null}
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
