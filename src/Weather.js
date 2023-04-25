import React, { useState } from "react";
import axios from "axios";
import './Weather.css';
import FormattedDate from "./FormattedDate";

export default function Weather() {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});

    function handleResponse(response) {
        setReady(true);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed, 
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            date: new Date (response.data.dt * 1000)
        });
    }

    function search() {
        const apiKey = "9cb72bec958f8fb02391985ed7b219d2";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
    

    if (ready) {
        return (
            <div className="Weather" >
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" className="form-control" autoFocus="on" placeholder="Enter a city.."/>
                        </div>
                        <div className="col-3">
                            <input type="submit" className="btn btn-primary w-100" value="Search"/>
                        </div>
                    </div>
                </form>
                <h1>Tokyo</h1>
                <div className="row">
                    <div className="col-8 flex">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy" />
                        <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="units">ºC | F</span>
                        <ul className="left" >
                            <li>Precipitation: 40%</li>
                            <li>Humidity: {weatherData.humidity} %</li>
                            <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                        </ul>
                    </div>
                    <div className="col-4">
                            <h4>Weather</h4>
                        <ul className="right">
                            <li>
                                <FormattedDate date={weatherData.date} />
                            </li>
                            <li className="text-capitalize">{weatherData.description}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        search();
        return "Loading...";
    }
}
