import React from 'react';

const WeatherView = (props) => {
    const date = new Date()
    
    return (
        <div>
           <h1>{props.cityName}</h1>
           <h2>{date.toDateString()}</h2>
           <h3>Temp: {props.weather.main.temp} °K</h3>
           <h3>Description: {props.weather.weather[0].description}</h3>
           <h3>Max: {props.weather.main.temp_max} °K - Min: {props.weather.main.temp_min} °K</h3>
           
        </div>
    )
}


export default WeatherView