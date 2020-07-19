import React, { useState } from "react";
import "./App.css";
import { useInterval } from "./useInterval";

function getTimeTill2021(currentDate: Date, countDownDate: Date) {
  // Get today's date and time
  const monthsLeft = 12 - currentDate.getMonth();

  // Time calculations for days, hours, minutes and seconds
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // var seconds = Math.floor((distance % (1000 * 60)) / 1000);
}

function App() {
  let [count, setCount] = useState(0);
  const countDownDate = new Date("Jan 1, 2021 00:00:00");
  const currentDate = new Date();

  useInterval(() => {
    setCount(count + 1);
  });

  return (
    <div className="App">
      <header className="App-header">Hello {count} </header>
    </div>
  );
}

export default App;
