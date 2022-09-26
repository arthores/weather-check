import React, { useContext } from "react";
import { GoSearch } from 'react-icons/go';
import WeatherContext from "../data/context";
import { locations } from "../data/locations.ts";
import '../styles/searchBar.css'

function SearchBar () {

  const {
    input,
    setInput,
  } = useContext(WeatherContext);

  const locationNames = locations.map((elemt) => elemt.city);

  const handleChange = (e) => setInput(e.target.value);

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
      />
      <datalist id="cities" >
        { locationNames.map((e) => (
          <option
            key={ Object.keys(e) }
            value={ e } />
        )) }
      </datalist>
      <button
        type="submit"
        className="btn-search"
      >
        <GoSearch
          className="icon-search"
        />
      </button>
    </section>
  )
}

export default SearchBar;
