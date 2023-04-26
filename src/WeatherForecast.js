import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thurs</div>
                    <WeatherIcon code="01d" size={40} />
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">17º</span>
                        <span className="WeatherForecast-temperature-min">12º</span>
                    </div>
                </div>
            </div>
        </div>
    );
}