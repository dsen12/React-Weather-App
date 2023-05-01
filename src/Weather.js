import React, { useState } from "react";
import axios from "axios";
import './Weather.css';
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import LocationPin from "./images/LocationPin.png"

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false});
    const [city, setCity] = useState(props.defaultCity)

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed, 
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            date: new Date (response.data.dt * 1000),
            city: response.data.name,
            sunrise: response.data.sys.sunrise,
            sunset: response.data.sys.sunset,
            feels: response.data.main.feels_like,
        });
        console.log(response.data);
    }
    
    function search() {
        const apiKey = "6bfa54f242cbb59343d4e58db578dc61";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }
    

    if (weatherData.ready) {
        return (
            <div className="Weather" >
                <div className="search-panel">
                    <form onSubmit={handleSubmit}>
                        <div className="row g-1">
                            <div className="col-6">
                                <input type="search" className="form-control search-bar" autoFocus="on" placeholder="Enter a city.." onChange={handleCityChange}/>
                            </div>
                            <div className="col-4 ">
                                <input type="submit" className="btn search-button" value="GET WEATHER"/>
                            </div>
                           <div className="col-2">
                                <img src={LocationPin} alt="" className="search-pin" width={35}/>
                            </div>
                        </div>
                    </form>
                </div>
                <WeatherInfo data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
        );
    } else {
        search();
        return "Loading...";
    }
}
