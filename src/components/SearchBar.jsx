import React from "react";
import { GoSearch } from 'react-icons/go';
import '../styles/searchBar.css'

function SearchBar () {
  return (
    <section
      className="section-search"
    >
      <input
        type="text"
        className="input-search"
      />
      <button
        type="button"
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
