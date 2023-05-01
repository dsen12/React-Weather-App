import React from "react";
import sunrise from "./images/sunrise.png";
import sunset from "./images/sunset.png";


export default function FormattedSunTime(props) {

    let sunriseDate = new Date(props.sunriseTime * 1000);
    let sunsetDate = new Date(props.sunsetTime * 1000);
    let timezone = props.timezone;

//Sunrise
    let sunriseHours = (Math.round(sunriseDate.getUTCHours() + timezone + 24) % 24);
    if (sunriseHours < 10) {
        sunriseHours = `0${sunriseHours}`;
    }
    let sunriseMinutes = sunriseDate.getMinutes();
    if (sunriseMinutes < 10) {
        sunriseMinutes = `0${sunriseMinutes}`;
    }

//Sunset
    let sunsetHours = (Math.round(sunsetDate.getUTCHours() + timezone + 24) % 24);
    if (sunsetHours < 10) {
        sunsetHours = `0${sunsetHours}`;
    }
    let sunsetMinutes = sunsetDate.getMinutes();
    if (sunsetMinutes < 10) {
        sunsetMinutes = `0${sunsetMinutes}`;
    }
    
    return (
        <div className="sun-time flex">
            <div className="sunrise">
                <img src={sunrise} alt="Sunrise" width="25" /> 
                {sunriseHours}:{sunriseMinutes}
            </div>
            <div className="ml-5">
                <img src={sunset} alt="Sunrise" width="25" /> 
                {sunsetHours}:{sunsetMinutes}
            </div>
        </div>
         );

}