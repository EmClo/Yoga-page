import React, { useState } from "react";
import "./ButtonText.css";

const words = ["Relaxation", "Peace", "Strength", "Mindfullness"];

const ButtonText = () => {
  const [word, setWord] = useState(0);

  function handleClick() {
    setWord((word + 1) % words.length);
  }

  return <button onClick={handleClick}>{words[word]}</button>;
};

export default ButtonText;
