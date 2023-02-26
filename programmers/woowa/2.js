/**
Your task is to implement a React component that renders a running-clock that will count down time until it reaches 0 minutes and 0 seconds (00:00).
Requirements
Functionality
Given the HTML structure:
 <label>
        <input type="number" />
        Minutes
      </label>
      <label>
        <input type="number" />
        Seconds
      </label>

      <button>START</button>
      <button>PAUSE / RESUME</button>
      <button>RESET</button>

      <h1 data-testid="running-clock">00:00</h1>
implement a running-clock that receives its time value from user inputs and allows the user to start, pause/resume the countdown and reset the clock.
In order to satisfy the task's requirements, you need to implement the following:
Time display:
time is displayed in <h1 data-testid="running-clock"> and its initial value is 00:00
time is displayed in mm:ss format;
1 minute, 5 seconds should be displayed as: 01:05;
1 minute, 65 seconds should be displayed as: 02:05;
2.Inputs:
changing input values does not change the value displayed in <h1 data-testid="running-clock">;
inputs do not need to have max or min attributes;
 the clock doesn't need to handle negative values; this is not a part of the solution and will not be evaluated.

3.Behavior:
1.On a START button click, set the clock value displayed in <h1 data-testid="running-clock"> with the time calculated from the inputs and start counting down;
2.Once the clock is running, update the displayed time every second;
3.Once the clock is running and the  START  button is clicked, restart the clock with the same time originally provided in the inputs;
4.Once the countdown is done and the clock reaches 00:00, stop counting and keep displaying 00:00;
On a PAUSE / RESUME button click, pause or resume the clock appropriately:
-PAUSE puts the countdown on hold;
-RESUME  resumes the countdown from where it left off;
6.Once the RESET button is clicked, both inputs should be reset to 0;
7.Once the RESET button is clicked, the time displayed in <h1 data-testid="running-clock"> should be reset to 00:00
Implementation hints & notice:
Do not clear the inputs on a START button click.
Use the same button element for both pause and resume actions.
The following elements are used in tests and therefore must not be changed:
<input> labels;
<button> texts;
<h1>element data-testid attribute value.

Hints
Only imports from the react module are allowed.
Your solution will be evaluated based on its correctness.
Design/styling is not assessed and will not affect the score. You should focus only on implementing the requirements.
The Preview tab will display your component. You can use it for testing purposes.
You can use console.log and console.error for debugging purposes via your browser's developer tools.
*/

import React, {useState, Fragment, useRef } from 'react';

function Solution() {
  const [time, setTime] = useState("00:00");
  const [isRunning, setIsRunning] = useState(false);


  const minutesInput =useRef();
  const secondsInput = useRef();

  let timer = useRef();
  let second;

  const startBtn = (timer) =>{
    second = minutesInput.current.value*60+secondsInput.current.value*1;
    secondToLang(second);

    clearInterval(timer);
    timer = setInterval(()=>{

      setIsRunning(false);
      second -= 1;
      secondToLang(second);
      if(second === 0){
        setIsRunning(true);
        clearInterval(timer);
        timer= null;
      }
    },1000);

  }

  const pauseBtn = (timer) =>{
    clearInterval(timer);
    timer= null;
  }

  const resetBtn = () =>{
    minutesInput.current.value = 0;
    secondsInput.current.value = 0;
    secondToLang(0);
    clearInterval(timer);
    timer= null;
  }

  const secondToLang = (number) =>{
    let minutes = Math.floor(number / 60);
    let seconds = number - (minutes * 60);
    setTime(minutes.toString().padStart(2,'0')+":"+seconds.toString().padStart(2,'0'));
  }

  return (
    <Fragment>
      <label>
        <input ref={minutesInput} type="number" />
        Minutes
      </label>
      <label>
        <input ref={secondsInput} type="number" />
        Seconds
      </label>

      <button onClick={()=>startBtn({timer})}>START</button>
      <button onClick={()=>pauseBtn({timer})}>PAUSE / RESUME</button>
      <button onClick={()=>resetBtn()}>RESET</button>

      <h1 data-testid="running-clock">{time}</h1>
    </Fragment>
  );
}

export default Solution;

