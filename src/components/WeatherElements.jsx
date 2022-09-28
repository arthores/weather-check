import React from "react";

function WeatherElements({ children }) {
  return (
    <div
      className="weather-icon"
    >
      { children }
    </div>
  );
};

export default WeatherElements;
