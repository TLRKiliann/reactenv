import React, { useState } from "react";
import './App.css';

function App() {
  const [theme, setTheme] = useState("light");
  const [counter, setCounter] = useState(0);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  const handleCountAdd = () => {
    setCounter(counter + 1)
  };

  const handleCountSub = () => {
    setCounter(counter - 1)
  };

  return (
    <div className='main--div'>
      <div className="sec--div">
        <h1>Debug & Test</h1>
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
    </div>
  );
}

export default App;
