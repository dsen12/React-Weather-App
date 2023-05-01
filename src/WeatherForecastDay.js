import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css"

export default function WeatherForecastDay(props) {
    function maxTemp() {
        let temperature = Math.round(props.data.temp.max);
        return temperature;
    }

    function minTemp() {
        let temperature = Math.round(props.data.temp.min);
        return temperature;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        return days[day];
    }
    return (
        <div className="WeatherForecastDay">
            <div className="WeatherForecastDay-day">{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={52} />
            <div className="WeatherForecastDay-temperatures">
                <div className="WeatherForecastDay-temperature-max">{maxTemp()}º</div>
                <div className="WeatherForecastDay-temperature-min">{minTemp()}º</div>
            </div>
        </div>
    )
}