
import './App.css'
import React, { useEffect } from 'react';
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

const Home = () => {
  const { defaultWeatherData } = useWeather();


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



