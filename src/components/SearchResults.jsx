import React, { useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
    const location = useLocation();
    const [city, setCity] = useState("");
    const [hourlyData, setHourlyData] = useState([]);
    const [weeklyData, setWeeklyData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Extract city from URL when component mounts
        const params = new URLSearchParams(location.search);
        const extractedCity = params.get("city");
        console.log(extractedCity)
        if (extractedCity) {
            setCity(extractedCity);
        }
    }, [location.search]);

    useEffect(() => {
        if (!city) return; // Prevent fetching when city is empty

        const fetchWeatherData = async () => {
            setLoading(true);
            const apiKey = "YOUR_API_KEY";
            const hourlyUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
            const weeklyUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=23.8103&lon=90.4125&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;

            try {
                const [hourlyResponse, weeklyResponse] = await Promise.all([
                    fetch(hourlyUrl),
                    fetch(weeklyUrl),
                ]);

                const hourlyResult = await hourlyResponse.json();
                const weeklyResult = await weeklyResponse.json();

                if (hourlyResult.list) {
                    setHourlyData(
                        hourlyResult.list.slice(0, 8).map((item) => ({
                            time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                            temp: item.main.temp,
                        }))
                    );
                }

                if (weeklyResult.daily) {
                    setWeeklyData(
                        weeklyResult.daily.map((day) => ({
                            day: new Date(day.dt * 1000).toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" }),
                            high: day.temp.max,
                            low: day.temp.min,
                            condition: day.weather[0].description,
                        }))
                    );
                }
            } catch (error) {
                console.error("Error fetching weather data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, [city]);

    return (
        <div className="p-6 max-w-screen-lg mx-auto font-sans">
            {/* Top Section */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-5xl font-semibold">{loading ? "Loading..." : `${hourlyData[0]?.temp}°C`}</h1>
                    <p className="text-lg text-gray-600">{loading ? "Fetching data..." : "Real-time weather data"}</p>
                </div>
            </div>

            {/* Map Section */}
            <div className="mt-6 w-full h-64">
                <MapContainer center={[23.8103, 90.4125]} zoom={8} className="h-full w-full rounded">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </MapContainer>
            </div>

            {/* Hourly Forecast */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold">Hourly forecast</h2>
                <div className="w-full h-40 bg-gray-200 mt-4 rounded flex items-center justify-center">
                    <ResponsiveContainer width="100%" height={150}>
                        <LineChart data={hourlyData}>
                            <XAxis dataKey="time" stroke="#8884d8" />
                            <YAxis domain={[20, 40]} stroke="#8884d8" />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="temp"
                                stroke="#ff7300"
                                strokeWidth={2}
                                dot={{ r: 3 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Weekly Forecast */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold">Weekly forecast</h2>
                <div className="space-y-2 mt-4">
                    {weeklyData.map((day, i) => (
                        <div key={i} className="flex justify-between bg-gray-100 p-3 rounded">
                            <span>{day.day}</span>
                            <span>{day.high}° / {day.low}°C</span>
                            <span className="text-gray-500">{day.condition}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
