import React, { useEffect, useState } from "react";

const TimePicker = () => {
  let [hours, setHours] = useState(0);
  let [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (hours > 23) {
      setHours((0));
    }
    if (hours < 0) {
      setHours((23));
    }
    if (minutes === 60) {
      setMinutes((0));
      setHours(+1);
    }
    if (minutes < 0) {
      setMinutes((59));
    }
    
  }, [hours, minutes]);

  const timerPlusHour = () => {
    setHours(hours + 1);
  };

  const timerMinusHour = () => {
    setHours(hours - 1);
  };

  const timerPlusMinute = () => {
    setMinutes(minutes + 1);
  };

  const timerMinusMinute = () => {
    setMinutes(minutes - 1);
  };

  return (
    <>
      <div>{`${hours < 10 ? '0' : ''}${hours} Hours`}</div>
      <button name="plusHour" onClick={timerPlusHour}>
        +
      </button>
      <button name="minusHour" onClick={timerMinusHour}>
        -
      </button>
      <div>{`${minutes < 10 ? '0' : ''}${minutes} Minutes`}</div>
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
