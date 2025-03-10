import React, { useEffect, useRef, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Area, AreaChart } from "recharts";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLocation, useNavigate } from "react-router-dom";
import useWeather from './contextapi/WeatherContext';
import { BsSearch } from "react-icons/bs";
import WeatherWidget from "./components/WeatherWidget";

const SearchResults = () => {
    const location = useLocation();
    const ref = useRef()
    const navigate = useNavigate();
    const { weatherData, fetchWeather, setCity, city, hourlyData, weeklyData, cityCoordinates, loading, fetchWeatherData, defaultWeatherData } = useWeather();
    const [city2, setCity2] = useState('');
    const [city3, setCity3] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        if (city2.trim() !== "") {
            navigate(`/search?city=${city2}`);
        } else if (city.trim() !== "") {
            navigate(`/search?city=${city}`);
        }
    };
    

    useEffect(() => {
        // Extract city from URL when component mounts
        const params = new URLSearchParams(location.search);
        const extractedCity = params.get("city");
        if (extractedCity) {
            setCity(extractedCity);
            setCity3(extractedCity);
        }
    }, [location.search, setCity]);

    useEffect(() => {
        if(city3){
            console.log()
            fetchWeather(city3);
        }
        if (city) {
            fetchWeatherData(city);
            
        }
    }, [city, city3]);

    if (loading) {
        return <div className="bg-slate-800 min-w-screen min-h-screen flex items-center justify-center">
            <div className="loader"></div>
        </div>;
    }


    return (
        <>
            <section className=" p-8 bg-[url(/search.jpg)] bg-bottom py-32 text-white ">
                <div className="flex flex-col md:flex-row items-start justify-between md:max-w-[85%] mx-auto h-[250px]">
                    <div className=" ">
                        <h1 className="text-3xl tracking-widest  md:text-5xl font-bold mb-4">Weather forecasts for thousands of locations around the world.</h1>
                        <form onSubmit={handleSearch} className="flex items-center gap-0.5  mb-4">
                            <input
                                type="text"
                                className="p-2 md:w-1/2 w-full mt-4 bg-gray-700 rounded-l-full outline-none px-4 ring-gray-700 focus:border-0"
                                placeholder="Enter city name..."
                                value={city2}
                                onChange={(e) => setCity2(e.target.value)}
                            />
                            <button type="submit" className="py-1.5 mt-4 px-4 bg-gray-700 cursor-pointer  rounded-r-full">
                                <BsSearch className="text-sm size-7 " />
                            </button>
                        </form>
                        <div className=" flex items-start md:justify-between md:flex-row justify-center flex-col">
                            <span className=" text-2xl pb-10">Showing result of <span className="capitalize">{city} :</span></span>

                            {/* {cod: '404', message: 'city not found'} */}
                            <div className="md:-mt-16 md:w-fit w-full">
                            {defaultWeatherData.cod!=='404' ? <WeatherWidget
                                city={defaultWeatherData.name}
                                temperature={defaultWeatherData.main.temp}
                                conditions={defaultWeatherData.weather[0].description}
                                sunrise={new Date(defaultWeatherData.sys.sunrise * 1000).toLocaleTimeString()}
                                sunset={new Date(defaultWeatherData.sys.sunset * 1000).toLocaleTimeString()}
                                humidity={defaultWeatherData.main.humidity}
                                windSpeed={defaultWeatherData.wind.speed}
                                bgcolor={'bg-[#2fc8eb]'}
                                bgcolor2={"bg-blue-900/10"}
                            /> : null}
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {weatherData.message === "city not found" ?
                <div className=" bg-slate-800 text-gray-300 flex items-center justify-center h-[200px] font-semibold text-5xl ">No City Found</div>
                :
                <div className="pt-64 bg-slate-800 text-gray-300 pb-20 md:pt-24" ref={ref}>
                    <div className=" max-w-[85%] mx-auto font-sans ">
                        <div className="flex items-center md:justify-between md:flex-row justify-center flex-col">
                            {/* Map Section */}
                            <div className="mt-6 md:w-[300px] w-full h-[360px] bg-slate-800  rounded-t-xl ">
                                <div className="w-fit h-fit pb-3 pt-5 capitalize flex items-center justify-center px-3">
                                    <span className="font-semibold">Location:</span> <span className="capitalize">{city}</span>
                                </div>
                                <MapContainer key={`${cityCoordinates.lat}-${cityCoordinates.lon}`} center={[cityCoordinates.lat, cityCoordinates.lon]} zoom={8} className="h-full w-full rounded">
                                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                </MapContainer>
                            </div>
                            <div className="md:w-2/3 lg:pl-0 md:pl-10 w-full md:mt-0 mt-20">

                                {/* Top Section */}
                                <div className="flex justify-between items-center pb-7">
                                    <div>
                                        <h1 className="text-lg font-semibold capitalize">{loading ? <div className="loader"></div> : `${city} ${hourlyData[0]?.temp}°C`}</h1>
                                        <p className="text-lg text-gray-600">{loading ? "Fetching data..." : "Real-time weather data"}</p>
                                    </div>
                                </div>



                                {/* Hourly Forecast */}
                                <div className="w-full">
                                    <h2 className="text-xl font-semibold">Hourly forecast</h2>
                                    <div className="w-full h-40  mt-4  flex items-center justify-center">
                                        <ResponsiveContainer width="100%" className={"bg-slate-950 rounded-md"} height={350}>
                                            <AreaChart data={hourlyData}>
                                                <defs>
                                                    <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#2fc8eb" stopOpacity={0.8} />
                                                        <stop offset="95%" stopColor="#ff7300" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                                <XAxis
                                                    dataKey="time"
                                                    axisLine={false}
                                                    stroke="#8884d8"
                                                />
                                                <YAxis
                                                    dataKey={"degree"}
                                                    domain={[20, 40]}
                                                    axisLine={false}
                                                    tickFormatter={(value) => `${value}°`}
                                                    stroke="#8884d8"
                                                />

                                                <Tooltip />
                                                {/* Remove the CartesianGrid component to get rid of all lines */}
                                                <Area
                                                    type="monotone"
                                                    dataKey="temp"
                                                    stroke="#ff7300"
                                                    fillOpacity={1}
                                                    fill="url(#colorTemp)"
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>

                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Weekly Forecast */}
                        <div className="mt-32 bg-[#2fc8eb]/10 rounded-md p-7">
                            <h2 className="text-lg font-semibold">Every day</h2>
                            <div className=" mt-3">
                                {weeklyData.map((day, i) => (
                                    <div
                                        key={i}
                                        className="flex justify-between items-center  border-b border-dotted p-3"
                                    >
                                        <span className="text-sm">{day.day}</span>
                                        <span className="text-md font-semibold">{day.high}° / {day.low}°</span>
                                        <span className="text-gray-300 text-sm capitalize">{day.condition}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default SearchResults;