import { useState } from "react";

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
      {!changeText && <p>Its good to see you</p>}
      {changeText && <p>Text Changed!</p>}
      <button onClick={changeTextHandler}>Change Text</button>
      <button onClick={addToCountHandler}>Add to count</button>
      <button onClick={clearCounterHandler}>Clear count</button>
      <p>{count}</p>
    </div>
  );
};

export default Greeting; 