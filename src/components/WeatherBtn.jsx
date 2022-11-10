import React, { useContext } from "react";
import WeatherContext from "../data/context";

function WeatherBtn ({ value }) {

  const {
    setType,
  } = useContext(WeatherContext);

  const clickChange = (e) => {
    setType(e.target.value);
  }

  return (
    <button
      type="button"
      className="change-temp"
      onClick={ clickChange }
      value={ value }
    >
      {value}
    </button>
  );
};

export default WeatherBtn;
