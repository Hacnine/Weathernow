import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WeatherWidget from './WeatherWidget';
import { BsSearch } from 'react-icons/bs';

const HeroSection = ({ weatherData }) => {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (city.trim() !== "") {
      navigate(`/search?city=${city}`);
    }
  };
  console.log(weatherData)

  return (
    <section className=" p-8 bg-[url(/src/assets/background/sunset.jpg)] py-32 text-white ">
      <div className="flex flex-col md:flex-row items-center justify-between md:max-w-[85%] mx-auto">
        <div className="md:w-1/2 ">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Weather forecasts for thousands of locations around the world</h1>
          <form onSubmit={handleSearch} className="flex items-center gap-1 mb-4">
            <input
              type="text"
              className="p-2 w-full bg-gray-700 rounded-l-full outline-none px-4 ring-gray-700 focus:border-0"
              placeholder="Enter city name..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" className="py-1.5 px-4 bg-gray-700 cursor-pointer  rounded-r-full">
              <BsSearch className="text-sm size-7" />
            </button>
          </form>
        </div>

        <div className="md:w-1/2  w-full mt-8 md:mt-0  flex md:justify-end justify-center items-center">
          {weatherData ? <WeatherWidget
            city={weatherData.name}
            temperature={weatherData.main.temp}
            conditions={weatherData.weather[0].description}
            sunrise={new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
            sunset={new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
            humidity={weatherData.main.humidity}
            windSpeed={weatherData.wind.speed}
            bgcolor={'bg-slate-800'}
            bgcolor2={"bg-blue-900/10"}
          /> : null}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

