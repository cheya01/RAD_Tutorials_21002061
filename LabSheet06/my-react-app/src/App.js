import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <p>This is my first REACT application</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Greeeting(){
  return <h1>Hello, REACT!</h1>
}

function Counter(){
  const[count, setCount] = useState(0);

  const increamentCount = () => {
    setCount(count + 1);
  }
  return(
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increamentCount}>Increament</button>
    </div>
  );
}
//export default App;
//export default Greeeting;
export default Counter;

import React from 'react';
class Toggle extends React.Component {
 constructor(props) {
super(props);
this.state = {
 isOn: false,
};
 }
 handleToggle = () => {
this.setState((prevState) => ({
 isOn: !prevState.isOn,
}));
 };
 render() {
const { isOn } = this.state;
return (
 <div>
 <button onClick={this.handleToggle}>{isOn ? 'ON' : 'OFF'}</button>
 <p>Status: {isOn ? 'ON' : 'OFF'}</p>
 </div>
);
 }
}
export default Toggle;

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

import React from 'react';
import ReactDOM from 'react-dom';
