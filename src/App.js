import React from "react";
import SearchBar from "./components/SearchBar";
// import { getWeather } from "./api/funcs";
import { locations } from "./data/locations.ts";
import './styles/weather.css'

console.log(locations);

function App () {
  return (
    <main
      className="main-box box"
    >
      <section
        className="section-box box"
      >
         < SearchBar />
      </section>
      {/* <div>
        Teste
      </div> */}
    </main>
  )
}

export default App;
