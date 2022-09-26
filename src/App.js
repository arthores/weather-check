import React from "react";
import SearchBar from "./components/SearchBar";
// import { getWeather } from "./api/funcs";
import './styles/weather.css'

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
        Futura fetuare de mudança de idioma
      </div> */}
    </main>
  )
}

export default App;
