import React, { useState } from "react";
import moment, { Moment } from "moment";
import "./App.css";
import { useInterval } from "./useInterval";

interface TimeLeft {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeTill2021(currentDate: Moment, countDownDate: Moment): TimeLeft {
  // Get currentDate/countDownDate diff
  const months = countDownDate.diff(currentDate, "months");
  currentDate.month(11);
  const distance = countDownDate.diff(currentDate);
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    months: months,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function pluralize(stringToPluralize: string, pluralizedFor: number): string {
  if (pluralizedFor !== 1) {
    return stringToPluralize + "s";
  }
  return stringToPluralize;
}

function App() {
  const countDownDate = moment("2020-12-31T23:59:59");

  let [timeLeft, setTimeLeft] = useState<TimeLeft>(
    getTimeTill2021(moment(), countDownDate)
  );

  useInterval(() => {
    setTimeLeft(getTimeTill2021(moment(), countDownDate));
  });

  return (
    <div className="App">
      <p className="timerRow">
        {timeLeft.months} {pluralize("month", timeLeft.months)}
      </p>
      <p className="timerRow">
        {timeLeft.days} {pluralize("day", timeLeft.days)}
      </p>
      <p className="timerRow">
        {timeLeft.hours} {pluralize("hour", timeLeft.hours)}
      </p>
      <p className="timerRow">
        {timeLeft.minutes} {pluralize("minute", timeLeft.minutes)}
      </p>
      <p className="timerRow">
        {timeLeft.seconds} {pluralize("second", timeLeft.seconds)}
      </p>
    </div>
  );
}

export default App;
