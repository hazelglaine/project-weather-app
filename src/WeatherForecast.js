import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiKey = "73a00877081bd43422bdee0f3022beb5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="WeatherForecast-day">Thu</div>
      <WeatherIcon code="01d" size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temp-max">32º</span>
        <span className="WeatherForecast-temp-min">21º</span>
      </div>
    </div>
  );
}
