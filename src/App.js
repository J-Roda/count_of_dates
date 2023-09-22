import { useState } from "react";
import "./styles.css";
import Steps from "./components/Steps";
import Count from "./components/Count";
import Dates from "./components/Dates";

export default function App() {
  const date = new Date();
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [day, setDay] = useState(date.getDate());

  function reset() {
    setCount(0);
    setStep(1);
    setDay(date.getDate() - count);
  }

  return (
    <div className="App">
      <Steps step={step} setStep={setStep} />

      <Count count={count} setCount={setCount} setDay={setDay} step={step} />

      <Dates count={count} day={day} date={date} />

      {(step !== 1 || count !== 0) && <button onClick={reset}>Reset</button>}
    </div>
  );
}
