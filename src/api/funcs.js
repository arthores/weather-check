import axios from "axios";

const apiKey = 'a406afc5dfa8f220b1bed74170b0609a';

export const getWeather = async (lan, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lan}&lon=${lon}&appid=${apiKey}`
  const get = await axios.get(url);
  return get.data;
}

export const temp = (typeTemp) => {
  const celcius = Math.floor(typeTemp - 273.15).toString().replace('.',',') + '°C';
  const fahrenheit = Math.floor((typeTemp- 273.15) * 9/5 + 32).toString().replace('.', ',') + '°F';
  return [celcius, fahrenheit];
}
