import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const remoValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React course with Omkar {counter}</h1>
      <h2>Counter vlaue: {counter} </h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={remoValue}>Remove Value</button>
      <p>Footer: {counter} </p>
    </>
  );
}

export default App;
