import { useState } from "react";

const Counter = ({initialState, pepito}) => {
    const [counter, setCounter] = useState(initialState);
  //let counter = 0
  // setCounter counter = counter + 1
  const increment = () => {
    setCounter(counter + 1);
    console.log(counter)
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{counter} {pepito}</span>
    </div>
  );
};

export default Counter;
