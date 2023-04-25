import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature"


export default function WeatherInfo(props) {
;    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
                <div className="row">
                    <div className="col-8 flex">
                        <WeatherIcon code={props.data.icon} alt={props.data.description} size={52} />
                        <WeatherTemperature celsius={props.data.temperature} />
                        <ul className="left" >
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