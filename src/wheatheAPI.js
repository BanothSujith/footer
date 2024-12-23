import { useState, useEffect } from "react";

const apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=Jaipur&appid=${apiKey}`;

export function useJaipurWeather() {
  const [weather, setWeather] = useState({
    temperature: null,
    humidity: null,
    windSpeed: null,
  });

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        setWeather({
          temperature: Math.round(data.main.temp), // Temperature in °C
          humidity: data.main.humidity, // Humidity in percentage
          windSpeed: data.wind.speed, // Wind speed in m/s
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []); // Runs once when the component mounts

  return weather; // Return the weather object
}
