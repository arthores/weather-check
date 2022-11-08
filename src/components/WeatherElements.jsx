import React, { useContext } from "react";
import humidity from '../icons/humidity.png';
import wind from '../icons/wind.png';
import WeatherContext from "../data/context";

function WeatherElements(icon) {

  const {
    api
  } = useContext(WeatherContext);

  const numbers = () => {
      const humidity = `${api.main.humidity} %`;
      const wind = `${api.wind.speed} m/s`;
      return [humidity, wind]
  }

  const iconsWeather = [
    {
      type: 'humidity',
      resolve: numbers()[0],
      icon: humidity,
    },
    {
      type: 'wind',
      resolve: numbers()[1],
      icon: wind,
    },
  ];

  const filterIcon = iconsWeather.filter((e) => e.type === icon.icon);
  const typeIcon = filterIcon.length > 0 ? filterIcon[0].icon : null;

  return (
    <div
      className="weather-icon"
    >
      <img src={ typeIcon } alt={ `${filterIcon[0].type} icon` } className="icon" />
      { `\n${filterIcon[0].resolve}` }
    </div>
  );
};

export default WeatherElements;
