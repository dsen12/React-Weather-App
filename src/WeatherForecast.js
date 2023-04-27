import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null);
    function handleResponse(response) {
        setForecastData(response.data.daily)
        setLoaded(true);
    }

    if (loaded)  {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <WeatherForecastDay data={forecastData[0]} />
                </div>
            </div>
        </div>
    );

    } else {
        let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
}