import React from "react";

export default function WeatherTemperature(props) {
    return (
        <div className="WeatherTemperature">
            <span className="temperature">
                {Math.round(props.celsisus)}
            </span>
            <span className="units">ºC | ºF</span>
        </div>

    );
}