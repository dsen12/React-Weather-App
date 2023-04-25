import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";



export default function WeatherInfo(props) {
;    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
                <div className="row">
                    <div className="col-8 flex">
                        <WeatherIcon code={props.data.icon} alt={props.data.description} size={52} />
                        <span className="temperature">{Math.round(props.data.temperature)}</span><span className="units">ºC | F</span>
                        <ul className="left" >
                            <li>Precipitation: 40%</li>
                            <li>Humidity: {props.data.humidity} %</li>
                            <li>Wind: {Math.round(props.data.wind)} km/h</li>
                        </ul>
                    </div>
                    <div className="col-4">
                            <h4>Weather</h4>
                        <ul className="right">
                            <li>
                                <FormattedDate date={props.data.date} />
                            </li>
                            <li className="text-capitalize">{props.data.description}</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}