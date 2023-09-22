export default function Steps({ step, setStep }) {
  return (
    <div>
      <input
        type="range"
        min="1"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      {/* <button onClick={() => step > 1 && setStep((s) => s - 1)}>-</button> */}
      <span> {step} </span>
      {/* <button onClick={() => setStep((s) => s + 1)}>+</button> */}
    </div>
  );
}
