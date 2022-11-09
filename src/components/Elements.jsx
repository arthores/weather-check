import React, { useContext } from "react";
import WeatherElements from "./WeatherElements";
import WeatherContext from "../data/context";
import { unixConvert } from "../api/funcs";
import '../styles/elements.css';

function Elements() {

  const {
    api
  } = useContext(WeatherContext);

  const description = api.weather[0].description;

  return (
    <section
      className="section-elements"
    >
      <aside
        className="aside-clime"
      >
        <span>{`${description.toUpperCase()}`}</span>
      </aside>
      <aside
        className="aside-elements"
      >
        <WeatherElements
          icon='humidity'
        />
        <WeatherElements
          icon='wind'
        />
      </aside>
      <aside
        className="aside-sun"
      >
        <span
          className="span-sun"
        >
          {`${unixConvert(api.sys.sunrise)} Sunrise`}
        </span>
        <span
          className="span-sun"
        >
          
          {`${unixConvert(api.sys.sunset)} Sunset`}
        </span>
      </aside>
    </section>
  );
}

export default Elements;
