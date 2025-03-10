
import './App.css'
import React, { useEffect, useState } from 'react';
import WeatherForecastSection from './components/WeatherForecastSection'
import WorldWeatherForecastSection from './components/WorldWeatherForcastSection';
import WeatherNewsSection from './components/WeatherNewsSection';
import OurStory from './components/OurStory';
import NewsletterSection from './components/NewsLetter';
import Footer from './components/Footer';
import HeroSection from './components/Hero';
import Header from './components/Header';
import { AvoidWeatherSurprise } from './components/AvoidWeatherSurprise';
import useWeather from './contextapi/WeatherContext';
import { useLocation } from 'react-router';

const Home = () => {
  const [city, setCity] = useState("")
  const location = useLocation();

  const { fetchWeather,defaultWeatherData } = useWeather();
      // useEffect(() => {
      //     // Extract city from URL when component mounts
      //     const params = new URLSearchParams(location.search);
      //     const extractedCity = params.get("city");
      //     if (extractedCity) {
      //         setCity(extractedCity);
      //     }
      // }, [location.search, setCity]);

  useEffect(() => {
    fetchWeather("dhaka");
  }, [city, fetchWeather]);
  // If the city is not found, fetch the weather for Dhaka automatically
  useEffect(() => {
    if (defaultWeatherData?.cod === "404") {
      setCity("Dhaka");
      fetchWeather("Dhaka");  // Call fetchWeather to get Dhaka's weather
    }

  }, [defaultWeatherData]);


  return (
    <div className='bg-slate-800 relative w-full'>
      <HeroSection weatherData={defaultWeatherData} />
      <WeatherForecastSection weatherData={defaultWeatherData} />
      <WorldWeatherForecastSection weatherData={defaultWeatherData} />
      <WeatherNewsSection />
      <AvoidWeatherSurprise />
      {/* <OurStory /> */}
      <NewsletterSection />
    </div>)
};

export default Home;



