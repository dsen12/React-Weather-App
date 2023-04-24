import React from "react";
import './Weather.css';

export default function Weather() {
    return (
        <div className="Weather" >
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" className="form-control" placeholder="Enter a city.."/>
                    </div>
                    <div className="col-3">
                        <input type="submit" className="btn btn-primary" value="Search"/>
                    </div>
                </div>
            </form>
            <h1>Tokyo</h1>
            <div className="row">
                <div className="col-9">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy" />
                    <p>15 ºC | F</p>
                    <ul>
                        <li>Precipitation: 40%</li>
                        <li>Humidity: 26%</li>
                        <li>Wind: 6 km/h</li>
                    </ul>
                </div>
                <div className="col-3">
                        <h4>Weather</h4>
                    <ul>
                        <li>Monday 12:00pm</li>
                        <li>Cloudy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}