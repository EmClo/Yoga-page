import React, { useState } from "react";

const IncrementButton = () => {
  const [counterValue, setCounterValue] = useState(0);

  const onClickHandler = () => {
    setCounterValue((oldValue) => oldValue + 1);
  };

  return (
    <button onClick={() => setCounterValue(counterValue + 1)}>
      {"The counter value is now " + counterValue}
    </button>
  );
};

export default IncrementButton;
