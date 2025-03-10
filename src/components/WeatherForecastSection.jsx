import React from 'react';
import WeatherWidget from './WeatherWidget';
import { weatherData } from '../constants';

const WeatherForecastSection = () => (
  <section className=" max-w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between py-8 text-gray-300 bg-slate-800 ">
    <div className="md:w-1/2 animate-fadeInLeft">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 capitalize">
        Any weather forecasts and updates.
      </h2>
      <p className="mb-4">
        Stay updated on any weather changes with Weathernow.&nbsp;
      </p>
      <p>
        We are an expert team specializing in everything that concerns weather data.
        Since 2010, our website has been providing accurate and detailed weather forecasts available on any device.
      </p>
    </div>
    <div className="md:w-1/3 w-full animate-fadeInRight mt-8 md:mt-0 ">
      <WeatherWidget weatherData={weatherData} city="Berlin" temperature={8} conditions="Clear" sunrise="06:36 AM" sunset="05:59 PM" humidity={57} windSpeed={11.2} bgcolor={"bg-[#30c8eb] "}  bgcolor2={"bg-[#25b5d5]"}/>

      
    </div>
   
  </section>
);


export default WeatherForecastSection;