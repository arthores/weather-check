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

  const temp = () => {
    if (renderCondition > 0) {
      const celcius = Math.floor(api.main.temp - 273.15).toString().replace('.',',');
      const fahrenheit = Math.floor((api.main.temp - 273.15) * 9/5 + 32).toString().replace('.', ',');
      return [celcius, fahrenheit];
    }
  }
  console.log(temp());
  

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
          <p>{ renderCondition > 0 ? `${temp()[0]}°C` : `${temp()[1]}°F` }</p>
          {renderCondition > 0 ? <img src={ icon } alt={ `${weather} icon` } /> : null}
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
