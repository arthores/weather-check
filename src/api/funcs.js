import axios from "axios";

const apiKey = 'x';

export const getWeather = async (lan, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lan}z&lon=${lon}&appid=${apiKey}`
  await axios.get(url).then((res) => console.log(res));
}