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

  const filterIcon = weatherIcon.filter((e) => e.weather === weather);
  const icon = filterIcon.length > 0 ? filterIcon[0].icon : null;

  const temp = (typeTemp) => {
    if (renderCondition > 0) {
      const celcius = Math.floor(typeTemp - 273.15).toString().replace('.',',') + '°C';
      const fahrenheit = Math.floor((typeTemp- 273.15) * 9/5 + 32).toString().replace('.', ',') + '°F';
      return [celcius, fahrenheit];
    }
  }

  

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
          <p>{ renderCondition > 0 ? `${temp(api.main.temp)[0]}` : null }</p>
          {renderCondition > 0 ? <img src={ icon } alt={ `${weather} icon` } /> : null}
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
