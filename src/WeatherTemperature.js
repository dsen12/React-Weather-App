import React from "react";
import "./WeatherTemperature.css"

export default function WeatherTemperature(props) {
    return (
        <div className="WeatherTemperature">
            <div className="temperature">
                <div className="TemperatureNumber flex">
                {Math.round(props.celsius)}
                    <div className="outer">
                        <div className="degree">o</div>
                        <div className="unit">c</div>
                    </div>
                </div>
            </div>
        </div>
    );
}