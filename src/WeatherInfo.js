import React from "react";
import FormattedDate from "./FormattedDate";
//import FormattedSunTime from "./FormattedSunTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";


export default function WeatherInfo(props) {
;    return (
        <div className="WeatherInfo">
            <div className="headings">
                <h4>Hello,</h4>
                <h1 className="typewriter">{props.data.city}.</h1>
            </div>
            <hr />
            <div className="row mt-3 mb-3 flex">
                <div className="col-5">
                    <ul className="left-info">
                        <li className="text-capitalize description mb-1">{props.data.description}</li>
                        <li>Feels like: {Math.round(props.data.feels)}ºC</li>
                        <li>Humidity: {props.data.humidity} %</li>
                        <li>Wind: {Math.round(props.data.wind)} km/h</li>
                    </ul>
                </div>
                <div className="col-3">
                    <WeatherIcon code={props.data.icon} alt={props.data.description} size={110} />
                </div>
                <div className="col-4">
                    <WeatherTemperature celsius={props.data.temperature} />
                </div>
            </div>
             <hr />
             <div className="bottom-panel flex">
                <div>
                    {/*<FormattedSunTime sun={props.data.sun} />*/}
                </div>
                <div className="last-updated">
                    <FormattedDate date={props.data.date} />
                </div>
             </div>
             <hr />
        </div>
    )
}