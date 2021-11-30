import { useState } from "react";
import Output from "./Output";

const Greeting = () => {

  const [changeText, setChangeText] = useState(false);
  const [count, setCount] = useState(0);

  const addToCountHandler = () => {
    setCount((prevState) => prevState + 1);
  };

  const clearCounterHandler = () => {
    setCount(0);
  };

  const changeTextHandler = () => {
    setChangeText(true);
  }

  return (
    <div>
      <h2>Hello World</h2>
      {!changeText && <Output>Its good to see you</Output>}
      {changeText && <Output>Text Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
      <button onClick={addToCountHandler}>Add to count</button>
      <button onClick={clearCounterHandler}>Clear count</button>
      <p>{count}</p>
    </div>
  );
};

export default Greeting; 