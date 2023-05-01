import React from "react";

export default function FormattedDate(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[props.date.getDay()];

    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    let year = props.date.getFullYear();
    let date = props.date.getDate();

    let monthsIndex = props.date.getMonth();
    let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
    ];
    let month = months[monthsIndex];

    return (
        <div>
            Last updated: <em>
                {hours}:{minutes} {day} {month} {date}, {year}
                </em> 
        </div>
    );
}