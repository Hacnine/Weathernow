import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WeatherWidget from './WeatherWidget';
import { BsSearch } from 'react-icons/bs';

const HeroSection = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('dhaka');
  const apiKey = "0cae9690544d21d158d36e65e5dabcd4";
  const navigate = useNavigate();

  const fetchWeather = async (cityName) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (city.trim() !== "") {
      navigate(`/search?city=${city}`); 
    }
  };

  useEffect(() => {
    fetchWeather('dhaka');
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-[url(/src/assets/background/sunset.jpg)] py-32 text-white">
      <div className="md:w-1/2 animate-fadeInLeft">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Weather forecasts for thousands of locations around the world</h1>
        <form onSubmit={handleSearch} className="flex items-center mb-4">
          <input
            type="text"
            className="p-2 w-full border rounded-l-md outline-none focus:ring-2 ring-gray-700 focus:border-0"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" className="p-2 bg-gray-700 rounded-r-md">
            <BsSearch className="text-xl size-7" />
          </button>
        </form>
      </div>

      <div className="md:w-1/2 animate-fadeInRight mt-8 md:mt-0">
        {weatherData && (
          <WeatherWidget
            city={'Dhaka'}
            temperature={weatherData.main.temp}
            conditions={weatherData.weather[0].description}
            sunrise={new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
            sunset={new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
            humidity={weatherData.main.humidity}
            windSpeed={weatherData.wind.speed}
            bgcolor={'bg-slate-800'}
            bgcolor2={"bg-blue-900/10"}
          />
        )}
      </div>
    </section>
  );
};

export default HeroSection;

