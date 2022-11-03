import React, { useContext } from "react";
import minTemp from '../icons/minTemp.png';
import maxTemp from '../icons/maxTemp.png';
import humidity from '../icons/humidity.png';
import wind from '../icons/wind.png';
import WeatherContext from "../data/context";

function WeatherElements(icon) {

  const {
    api
  } = useContext(WeatherContext);

  const temp = (typeTemp) => {
      const celcius = Math.floor(typeTemp - 273.15).toString().replace('.',',') + '°C';
      const fahrenheit = Math.floor((typeTemp- 273.15) * 9/5 + 32).toString().replace('.', ',') + '°F';
      return [celcius, fahrenheit];
  }

  const numbers = () => {
      const max = temp(api.main.temp_max)[0];
      const min = temp(api.main.temp_min)[0];
      const humidity = `${api.main.humidity} %`;
      const wind = `${api.wind.speed} m/s`;
      return [min, max, humidity, wind]
  }

  const iconsWeather = [
    {
      type: 'max-temp',
      resolve: numbers()[0],
      icon: maxTemp,
    },
    {
      type: 'min-temp',
      resolve: numbers()[1],
      icon: minTemp,
    },
    {
      type: 'humidity',
      resolve: numbers()[2],
      icon: humidity,
    },
    {
      type: 'wind',
      resolve: numbers()[3],
      icon: wind,
    },
  ];

  const filterIcon = iconsWeather.filter((e) => e.type === icon.icon);
  const typeIcon = filterIcon.length > 0 ? filterIcon[0].icon : null;


  console.log();

  return (
    <div
      className="weather-icon"
    >
      <img src={ typeIcon } alt={ `${filterIcon[0].type} icon` } className="icon" />
      { `${(filterIcon[0].type).toUpperCase()} ${filterIcon[0].resolve}` }
    </div>
  );
};

export default WeatherElements;
