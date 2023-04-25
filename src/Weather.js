import React, { useState } from "react";
import axios from "axios";
import './Weather.css';
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false});
    const [city, setCity] = useState(props.defaultCity)

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed, 
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            date: new Date (response.data.dt * 1000),
            city: response.data.name
        });
    }

    function search() {
        const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
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
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" className="form-control" autoFocus="on" placeholder="Enter a city.." onChange={handleCityChange}/>
                        </div>
                        <div className="col-3">
                            <input type="submit" className="btn btn-secondary w-100" value="Search"/>
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
            </div>
        );
    } else {
        search();
        return "Loading...";
    }
}
