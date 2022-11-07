import React from "react";
import WeatherElements from "./WeatherElements";
// import WeatherContext from "../data/context";
import '../styles/elements.css';

function Elements() {

  return (
    <section
      className="section-elements"
    >
        <WeatherElements
          icon='humidity'
        />
        <WeatherElements
          icon='wind'
        />
    </section>
  );
}

export default Elements;
