import React from "react";
import axios from "axios";
import './Weather.css';

export default function Weather() {
    const apiKey = "c751fba46471dbd42df6fc43ae19a086";
    let city = "Tokyo";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    return (
        <div className="Weather" >
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" className="form-control" autoFocus="on" placeholder="Enter a city.."/>
                    </div>
                    <div className="col-3">
                        <input type="submit" className="btn btn-primary w-100" value="Search"/>
                    </div>
                </div>
            </form>
            <h1>Tokyo</h1>
            <div className="row">
                <div className="col-8 flex">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy" />
                    <span className="temperature">15</span><span className="units">ºC | F</span>
                    <ul className="left" >
                        <li>Precipitation: 40%</li>
                        <li>Humidity: 26%</li>
                        <li>Wind: 6 km/h</li>
                    </ul>
                </div>
                <div className="col-4">
                        <h4>Weather</h4>
                    <ul className="right">
                        <li>Monday 12:00pm</li>
                        <li>Cloudy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}