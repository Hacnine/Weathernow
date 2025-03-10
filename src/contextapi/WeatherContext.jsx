import React, { createContext, useState, useEffect, useContext, useCallback } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [defaultWeatherData, setDefaultWeatherData] = useState(null);

  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  const [hourlyData, setHourlyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [cityCoordinates, setCityCoordinates] = useState({ lat: 23.8103, lon: 90.4125 }); // Default to Dhaka
  const [loading, setLoading] = useState(true);
  const apiKey = "0cae9690544d21d158d36e65e5dabcd4";

  const fetchWeather = useCallback(async (cityName) => {
    try {
      if (cityName) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        setDefaultWeatherData(data);
          console.log(data)
        
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }, [apiKey]);

  const fetchWeatherData = useCallback(async (cityName) => {
    try {
      setLoading(true);
      const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;

      const response = await fetch(weatherUrl);
      const result = await response.json();
      setWeatherData(result);

      if (result.city) {
        setCityCoordinates({
          lat: result.city.coord.lat,
          lon: result.city.coord.lon
        });
      }

      if (result.list) {
        setHourlyData(
          result.list.slice(0, 8).map((item) => ({
            time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            temp: item.main.temp,
          }))
        );

        const weeklyDataMap = new Map();
        result.list.forEach((item) => {
          const date = new Date(item.dt * 1000);
          const day = date.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" });

          if (!weeklyDataMap.has(day)) {
            weeklyDataMap.set(day, {
              day: day,
              high: item.main.temp_max,
              low: item.main.temp_min,
              condition: item.weather[0].description,
            });
          } else {
            const existing = weeklyDataMap.get(day);
            existing.high = Math.max(existing.high, item.main.temp_max);
            existing.low = Math.min(existing.low, item.main.temp_min);
          }
        });

        setWeeklyData(Array.from(weeklyDataMap.values()));
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  }, [apiKey]);



  return (
    <WeatherContext.Provider value={{
      weatherData,
      city,
      setCity,
      fetchWeather,
      hourlyData,
      weeklyData,
      cityCoordinates,
      loading,
      fetchWeatherData,
      defaultWeatherData,
      errorMessage
    }}>
      {children}
    </WeatherContext.Provider>
  );
};

const useWeather = () => {
  return useContext(WeatherContext);
};

export default useWeather;