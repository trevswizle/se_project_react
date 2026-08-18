import { apiKey, coordinates } from "./constants";

function getWeatherCondition(temp) {
  if (temp >= 86) {
    return "hot";
  }
  if (temp >= 66) {
    return "warm";
  }
  return "cold";
}

function getWeatherData() {
  const { latitude, longitude } = coordinates;
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
}

function parseWeatherData(data) {
  return {
    city: data.name,
    temp: {
      F: Math.round(data.main.temp),
    },
    type: getWeatherCondition(data.main.temp),
  };
}

export { getWeatherData, parseWeatherData, getWeatherCondition };
