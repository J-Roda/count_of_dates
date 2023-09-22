export default function Dates({ count, day, date }) {
  return (
    <>
      {(count === 0 && (
        <p>{`Today is ${new Date(date.setDate(day))
          .toString()
          .slice(0, 15)}`}</p>
      )) ||
        (count > 0 && (
          <div>
            <p>{`${count} days from today is ${new Date(date.setDate(day))
              .toString()
              .slice(0, 15)}`}</p>
          </div>
        )) ||
        (count < 0 && (
          <div>
            <p>{`${Math.abs(count)} days ago was ${new Date(date.setDate(day))
              .toString()
              .slice(0, 15)}`}</p>
          </div>
        ))}
    </>
  );
}
