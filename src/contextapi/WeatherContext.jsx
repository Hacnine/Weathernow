import React, { createContext, useState, useEffect, useContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("dhaka");
  const apiKey = "0cae9690544d21d158d36e65e5dabcd4";

  const fetchWeather = async (cityName) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);
  return (
    <WeatherContext.Provider value={{
        weatherData, 
        city, 
        setCity, 
        fetchWeather 
        }}>
      {children}
    </WeatherContext.Provider>
  );
};

const useWeather = () => {
    return useContext(WeatherContext);
  };
export default useWeather;
