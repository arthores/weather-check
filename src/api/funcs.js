import axios from "axios";

const apiKey = 'a406afc5dfa8f220b1bed74170b0609a';

export const getWeather = async (lan, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lan}&lon=${lon}&appid=${apiKey}`
  const get = await axios.get(url);
  return get.data;
}

export const temp = (tempNum, type) => {
  const celcius = Math.floor(tempNum - 273.15).toString().replace('.',',');
  const fahrenheit = Math.floor((tempNum- 273.15) * 9/5 + 32).toString().replace('.', ',');
  if (type === "C") return celcius;
  if (type === "F") return fahrenheit;
  else return null;
}

export const unixConvert = (unix) => {
  // https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
  const date = new Date(unix * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();

  const formattedTime = hours + ":" + minutes.substr(-2);

  return formattedTime;
}
