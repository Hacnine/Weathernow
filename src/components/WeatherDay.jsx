import React from 'react'

const WeatherDay = ({day, icon, temp}) => {
    return (
            <div className="flex flex-col items-center text-sm">
                <div className="font-bold">{day}</div>
                <div>{icon}</div>
                <div>{temp}°</div>
            </div>
     
    )
}

export default WeatherDay
