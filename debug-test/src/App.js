import React, { useState } from "react";
import './App.css';

function App() {
  const [theme, setTheme] = useState("light");
  const [counter, setCounter] = useState(0);
  const [booButt, setBooButt] = useState("ok");
  const [testButt, setTestButt] = useState("test_1");

  const handleCountAdd = () => {
    setCounter(counter + 1)
  };

  const handleCountSub = () => {
    setCounter(counter - 1)
  };

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  const handleToggle = () => {
    const nextBooButt = booButt === 'ok' ? "greetings" : "ok";
    setBooButt(nextBooButt);
  };

  const handleTest = () => {
    setTestButt(testButt === "test_1" ? "test_2" : "test_1");
  };
  
  return (
    <div className='main--div'>
      <div className="sec--div">
        <h1>Debug & Test</h1>
        <p>Example test p tag</p>
      </div>
      <div className="third--div">
        <button onClick={handleCountAdd}>
          +
        </button>
        <div id="div--counter">
          <h3>Current counter {counter}</h3>
        </div>
        <button onClick={handleCountSub}>
          -
        </button>
      </div>

      <button onClick={toggleTheme}>
        Current theme: {theme}
      </button>

      <button onClick={handleToggle}>
        {booButt}
      </button>

      <button onClick={handleTest}>
        Test: {testButt}
      </button>
    </div>
  );
}

export default App;
