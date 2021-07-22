import React, { useEffect, useState } from "react";

const TimePicker = () => {
  let [hours, setHours] = useState(0);
  let [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (hours > 23) {
      setHours((hours = 0));
    }
    if (hours < 0) {
      setHours((hours = 23));
    }
    if (minutes == 59) {
      setMinutes((minutes = 0));
      setHours(hours + 1);
    }
    if (minutes < 0) {
      setMinutes((minutes = 0));
    }
  }, [hours, minutes]);

  const timerPlusHour = (event) => {
    setHours(hours + 1);
  };

  const timerMinusHour = (event) => {
    setHours(hours - 1);
  };

  const timerPlusMinute = (event) => {
    setMinutes(minutes + 1);
  };

  const timerMinusMinute = (event) => {
    setMinutes(minutes - 1);
  };

  return (
    <>
      <div>{hours}</div>
      <button name="plusHour" onClick={timerPlusHour}>
        +
      </button>
      <button name="minusHour" onClick={timerMinusHour}>
        -
      </button>
      <div>{minutes}</div>
      <button name="plusMinute" onClick={timerPlusMinute}>
        +
      </button>
      <button name="minusMinute" onClick={timerMinusMinute}>
        -
      </button>
    </>
  );
};
export default TimePicker;
