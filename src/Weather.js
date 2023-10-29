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
            sunriseTime: response.data.sys.sunrise,
            sunsetTime: response.data.sys.sunset,
            timezone: response.data.timezone / 3600,
            feels: response.data.main.feels_like,
        });
    }
    
    function search() {
        const apiKey = "6bfa54f242cbb59343d4e58db578dc61";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        console.log(apiUrl)
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    function searchLocation(position) {
        let apiKey = "6bfa54f242cbb59343d4e58db578dc61";
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
      }

    function findLocation(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(searchLocation);
      }
    

    if (weatherData.ready) {
        return (
            <div className="Weather" >
                <div className="">
                    <form onSubmit={handleSubmit}>
                        <div className="search-panel">
                            <input type="search" className="form-control w-100 search-bar" autoFocus="on" placeholder="Enter a city.." onChange={handleCityChange}/>
                            <div className="buttons">
                                <div>
                                    <input type="submit" className="btn search-button" value="GET WEATHER"/>
                                </div>
                                <div className="current-location ms-2">
                                    <a href="/" onClick={findLocation}>
                                    <img src={LocationPin} alt="" className="search-pin" width={35}/>
                                    </a>
                                </div>
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
        return "Loading weather app...";
    }
}
