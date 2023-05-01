import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";
import sunrise from "./images/sunrise.png";
import sunset from "./images/sunset.png";


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
                        <li>Feels like: 10º</li>
                        <li>Humidity: {props.data.humidity} %</li>
                        <li>Wind: {Math.round(props.data.wind)} km/h</li>
                    </ul>
                </div>
                <div className="col-3">
                    <WeatherIcon code={props.data.icon} alt={props.data.description} size={92} />
                </div>
                <div className="col-4">
                    <WeatherTemperature celsius={props.data.temperature} />
                </div>
            </div>
             <hr />
             <div>
                <div>
                    <span>
                        <img src={sunrise} alt="" className="" width={25}/>
                        {props.data.sunrise}
                    </span>
                    <span>
                        <img src={sunset} alt="" className="" width={25}/>
                        {props.data.sunset}
                    </span>
                </div>
                <div>
                    Last updated: 
                    <FormattedDate date={props.data.date} />
                </div>
             </div>
             <hr />
        </div>
    )
}