import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedSunTime from "./FormattedSunTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";


export default function WeatherInfo(props) {
;    return (
        <div className="WeatherInfo">
            <div className="headings">
                <h4>Hi there,</h4>
                <h1>{props.data.city}.</h1>
            </div>
            <hr />
            <div className="content mt-3 mb-3">
                <div className="col">
                        <p className="text-capitalize description mb-1">{props.data.description}</p>
                    <ul className="left-info">
                        <li>Feels like: {Math.round(props.data.feels)}ºC</li>
                        <li>Humidity: {props.data.humidity} %</li>
                        <li>Wind: {Math.round(props.data.wind)} km/h</li>
                    </ul>
                </div>
                <div className="col">
                    <WeatherIcon code={props.data.icon} alt={props.data.description} size={110} />
                </div>
                <div className="col">
                    <WeatherTemperature celsius={props.data.temperature} />
                </div>
            </div>
             <hr />
             <div className="bottom-panel flex">
                <div>
                    <FormattedSunTime sunriseTime={props.data.sunriseTime} sunsetTime={props.data.sunsetTime} timezone={props.data.timezone} date={props.data.date} />
                </div>
                <div className="last-updated">
                    <FormattedDate date={props.data.date} />
                </div>
             </div>
             <hr />
        </div>
    )
}