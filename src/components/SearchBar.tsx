import React, { useContext, useEffect } from "react";
import { GoSearch } from 'react-icons/go';
import WeatherContext from "../data/context";
import { locations } from "../data/locations";
import '../styles/searchBar.css'

function SearchBar () {

  const {
    input,
    setInput,
    setCoordinates,
    setSearch,
  } = useContext(WeatherContext);

  useEffect(() => {
    if (input !== '') {
      select();
      setCoordinates(select())
    };
  }, [input]);

  const select = () => {
    let city = {};
    locations.map((e) => {
      if (input === e.city) {
        city = e;
      };
  });
  return city;
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const searchCity = () => {
    setSearch(true);
    setInput('');
  };

  return (
    <section
      className="section-search"
    >
      <input
        list="cities"
        type="text"
        className="input-search"
        autoComplete="on"
        value={ input }
        onChange={ handleChange }
        placeholder="Select one city"
      />
      <datalist id="cities" >
        { locations.map((e: inCities[]) => (
          <option
            key={ Object.keys(e) }
            value={ e.city } />
        )) }
      </datalist>
      <button
        type="submit"
        className="btn-search"
        onClick={ searchCity }
      >
        <GoSearch
          className="icon-search"
        />
      </button>
    </section>
  );
};

export default SearchBar;
