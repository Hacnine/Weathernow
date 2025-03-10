
import './App.css'
import React from 'react';
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
  const { weatherData } = useWeather();
  return (
    <div className='bg-slate-800 relative'>
      <Header />
      <HeroSection weatherData={weatherData}/>
      <WeatherForecastSection weatherData={weatherData}/>
      <WorldWeatherForecastSection weatherData={weatherData}/>
      <WeatherNewsSection />
      <AvoidWeatherSurprise />
      {/* <OurStory /> */}
      <NewsletterSection />
      <Footer />
    </div>)
};

export default Home;



