import React from 'react'
import WeatherWidget from './WeatherWidget';

export const AvoidWeatherSurprise = () => (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 text-gray-300 animate-fadeIn pb-14 ">
        <div className="md:w-1/2 animate-fadeInLeft">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Avoid weather surprises</h2>
            <p className="mb-4">Weathernow provides a road trip planner tool with accurate weather forecast information to optimize travel plans.</p>
            <p className="mb-4">A successful road trip requires careful planning to ensure travelers can enjoy a fun and safe journey. A road trip planner with weather is an essential tool to help with this planning. This tool provides up-to-date weather information for any given route.</p>
            <p>It allows travelers to make informed decisions about their travel plans at any given time.</p>
        </div>
        <div className="md:w-1/2 flex justify-end animate-fadeInRight mt-8 md:mt-0 relative">
            <div className="text-center mb-8">
                <img decoding="async" loading="lazy" width="340" height="840" src="https://ld-wp73.template-help.com/wordpress/prod_33356/v1/wp-content/uploads/2023/05/home_img.png" className="mx-auto" alt="image" />
            </div>


            <div className=" absolute  left-20 top-20">
            <WeatherWidget city={"Tokyo"} temperature={"4"} conditions={"Light rain"} sunrise={"06:01 AM"} sunset={"05:44 PM"} humidity={"81%"} windSpeed={"18.7Km/h"} bgcolor="bg-[#5aafa4]" country="Japan" />
            </div>
        </div>
    </section>
);

