import React from "react";
import WeatherElements from "./WeatherElements";
// import WeatherContext from "../data/context";
import '../styles/elements.css';

function Elements() {

  return (
    <section
      className="section-elements"
    >
      <aside>
        <WeatherElements
          icon='max-temp'
        />
        <WeatherElements
          icon='min-temp'
        />
      </aside>
      <aside>
        <WeatherElements
          icon='humidity'
        />
        <WeatherElements
          icon='wind'
        />
      </aside>
    </section>
  );
}

export default Elements;
