export default function Count({ count, setCount, setDay, step }) {
  function handleNegDate() {
    setDay((d) => d - step);
    setCount((c) => c - step);
  }

  function handlePlusDate() {
    setDay((d) => d + step);
    setCount((c) => c + step);
  }

  function handleCount(e) {
    console.log(`e => ${e}`);

    setCount(Number(e.target.value));
    setDay((d) => d + Number(e.target.value));
  }

  return (
    <div>
      <button onClick={handleNegDate}>-</button>
      <input type="text" value={count} onChange={handleCount} />
      {/* <span> Count: {count} </span> */}
      <button onClick={handlePlusDate}>+</button>
    </div>
  );
}
