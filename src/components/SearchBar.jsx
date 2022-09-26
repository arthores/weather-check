import React from "react";
import { GoSearch } from 'react-icons/go';
import '../styles/searchBar.css'

function SearchBar () {
  return (
    <section
      className="section-search"
    >
      <input
        list="cities"
        type="text"
        className="input-search"
        autoComplete="off"
      />
      <datalist id="cities" >
        <option value="gêlo" />
        <option value="Càrro" />
        <option value="testado" />
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
