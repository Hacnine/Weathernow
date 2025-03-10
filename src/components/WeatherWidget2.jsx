import React from 'react'
import { BiSun } from 'react-icons/bi';
import { WiDaySunny, WiCloud, WiRaindrop, WiStrongWind, WiSunrise, WiSunset } from 'react-icons/wi';
import WeatherDay from './WeatherDay';

const WeatherWidget2 = ({ weatherData, city, temperature, conditions, sunrise, sunset, humidity, windSpeed, bgcolor, bgcolor2 }) => 
    (

    <div className={`max-w-xs mx-auto ${bgcolor} text-white p-6 rounded-2xl shadow-lg`}>
        <div className="text-center flex items-center justify-center gap-3">
            <BiSun className=' text-amber-300 text-5xl' />
            <div className="text-2xl font-bold capitalize"><p>{city}</p><div className="text-lg">{conditions}</div> </div>

            <div className="text-[46px] font-semibold mt-2">{temperature}°</div>
        </div>
        <div className={` ${bgcolor2} p-4  rounded-lg mt-4 flex justify-center gap-6 text-sm`}>
            <div className="">
                <div className="text-center">
                    <WiSunrise className="text-yellow-300 text-2xl mx-auto" />
                    <div>Sunrise</div>
                    <div>{sunrise}</div>
                </div>
                <div className="text-center">
                    <WiSunset className="text-orange-400 text-2xl mx-auto" />
                    <div>Sunset</div>
                    <div>{sunset}</div>
                </div>
            </div>
            <div className="">
                <div className="text-center">
                    <WiRaindrop className="text-blue-300 text-2xl mx-auto" />
                    <div>Humidity</div>
                    <div>{humidity}%</div>
                </div>
                <div className="text-center">
                    <WiStrongWind className="text-gray-200 text-2xl mx-auto" />
                    <div>Wind</div>
                    <div>{windSpeed} Km/h</div>
                </div>
            </div>
        </div>

        <div className="flex justify-around mt-4">
            {weatherData?.slice(0, 4).map((info) => (
                <WeatherDay key={info.day} day={info.day} temp={info.temp} icon={info.icon} />
            ))}
        </div>


        <div className=" flex justify-around mt-4">
            {weatherData?.slice(4, 8).map((info) => (
                <WeatherDay key={info.day} day={info.day} temp={info.temp} icon={info.icon} />
            ))}
        </div>
    </div>
);

export default WeatherWidget2



