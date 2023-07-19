import { useState } from "react";
let handler;

function Timer() {
  const [time, setTime] = useState(0);
  const [buttonText, setButtonText] = useState("Start Timer");

  function startTimer() {
    let tracker = 0;
    setButtonText("Stop Timer");
    handler = setInterval(() => {
      tracker += 1;
      setTime(tracker);
    }, 1000);
  }

  function stopTimer() {
    setButtonText("Start Timer");
    clearInterval(handler);
    setTime(0);
  }
  return (
    <div>
      <h2>Time : {time}</h2>
      <button
        onClick={() => {
          if (buttonText === "Start Timer") {
            startTimer();
          } else {
            stopTimer();
          }
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Timer;