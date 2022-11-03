import { createContext } from "react";

// Tipagem nula para evitar o erro da passagem obrigatoria de parâmetro.
const WeatherContext = createContext<null | any>(null);

export default WeatherContext;
