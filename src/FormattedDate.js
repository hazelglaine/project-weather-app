import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  let time = null;

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours > 12) {
    time = `${hours - 12}:${minutes} PM`;
  } else {
    if (hours < 10) {
      time = `0${hours}:${minutes} AM`;
    } else {
      time = `${hours}:${minutes} AM`;
    }
  }

  return (
    <div className="FormattedDate">
      {day} {time}
    </div>
  );
}
