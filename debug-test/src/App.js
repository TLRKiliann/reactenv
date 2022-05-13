import React, { useState } from "react";
import './App.css';

function App() {
  const [theme, setTheme] = useState("light");
  const [counter, setCounter] = useState(0);
  const [btnButt, setBtnButt] = useState("ok");
  const [testButt, setTestButt] = useState("test_1");

  const [testDiv, setTestDiv] = useState("cooly");

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

  const handleBtn = () => {
    const nextBtnButt = btnButt === "ok" ? "greetings" : "ok";
    setBtnButt(nextBtnButt);
  };

  const handleTest = () => {
    const nextTestButt = testButt === "test_1" ? "test_2" : "test_1";
    setTestButt(nextTestButt)
  };


  //const mytest = document.getElementById('div--change');

  const handleDiv = () => {
    setTestDiv(prevState => !prevState);
  }

  const mytest = "ok let's test it !"

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

      <button onClick={handleBtn}>
        Truc qui merde : {btnButt}
      </button>

      <button onClick={handleTest}>
        Test: {testButt}
      </button>
      <div id="mydiv--test" onClick={handleDiv}>
        {testDiv ? "no cool" : "cooly"}
      </div>
      <div id="div--change">
        <p style={{"fontWeight":"bold"}}>My special div to change id</p>
        {mytest}
      </div>
    </div>
  );
}

export default App;
