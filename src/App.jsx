
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



const App = () => (
  <div className='bg-slate-800 relative'>
    <Header />
    <HeroSection />
    <WeatherForecastSection />
    <WorldWeatherForecastSection />
    <WeatherNewsSection />
    <AvoidWeatherSurprise/>
     {/* <OurStory /> */}
     <NewsletterSection />
    <Footer />
  </div>
);

export default App;