import React from 'react';

const WeatherPlannerSection = () => (
  <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100 animate-fadeIn">
    <div className="md:w-1/2 animate-fadeInLeft">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Avoid weather surprises</h2>
      <p className="mb-4">Weathernow provides a road trip planner tool with accurate weather forecast information to optimize travel plans.</p>
      <p className="mb-4">A successful road trip requires careful planning to ensure travelers can enjoy a fun and safe journey. A road trip planner with weather is an essential tool to help with this planning. This tool provides up-to-date weather information for any given route.</p>
      <p>It allows travelers to make informed decisions about their travel plans at any given time.</p>
    </div>
    <div className="md:w-1/2 animate-fadeInRight mt-8 md:mt-0">
      <div className="text-center mb-8">
        <img decoding="async" loading="lazy" width="840" height="840" src="https://ld-wp73.template-help.com/wordpress/prod_33356/v1/wp-content/uploads/2023/05/home_img.png" className="mx-auto" alt="image" />
      </div>
      <WeatherWidget color="#5aafa4" city="Tokyo" country="Japan" />
    </div>
  </section>
);

const WeatherWidget = ({ color, city, country }) => (
  <div className="weather-widget max-w-sm mx-auto bg-blue-900 text-white p-4 rounded-md mb-8 last:mb-0" style={{ backgroundColor: color }}>
    <a href={`https://www.wetter2.com/asia/japan/${city.toLowerCase()}`} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col items-center">
        <img src="https://www.weatherwp.com/api/images/weather-icons/black-icons/icons-17.svg" alt="Weather Icon" className="w-16 h-16 mb-4" />
        <div className="text-center">
          <div className="text-lg font-bold">{city}</div>
          <div className="text-sm">Light rain</div>
          <div className="text-2xl font-bold mt-2">4°</div>
        </div>
        <div className="flex justify-between w-full mt-4 text-sm">
          <div className="text-center">
            <div>Sunrise</div>
            <div>06:01 AM</div>
          </div>
          <div className="text-center">
            <div>Sunset</div>
            <div>05:44 PM</div>
          </div>
          <div className="text-center">
            <div>Humidity</div>
            <div>81%</div>
          </div>
          <div className="text-center">
            <div>Wind Speed</div>
            <div>18.7Km/h</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-full mt-4 text-sm">
          <WeatherDay day="Sun" temp="11°" />
          <WeatherDay day="Mon" temp="12°" />
          <WeatherDay day="Tue" temp="13°" />
        </div>
      </div>
    </a>
  </div>
);

const WeatherDay = ({ day, temp }) => (
  <div className="weather-day flex flex-col items-center mb-4">
    <div className="weather-day-name">{day}</div>
    <img className="weather-day-image w-8 h-8" src="https://www.weatherwp.com/api/images/weather-icons/black-icons/icons-9.svg" alt={`${day} weather`} />
    <div className="weather-day-temp">{temp}</div>
  </div>
);

export default WeatherPlannerSection;