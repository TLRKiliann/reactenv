import React from 'react';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [name, setName] = useState(['']);
  const [pwd, setPwd] = useState(['']);
  const [chk, setChk] = useState(false);

  function callCheck() {
  setChk(!chk)
  }
  
  const handle = () => {
    localStorage.setItem('checkbox', chk);
    localStorage.setItem('Name', name);
    localStorage.setItem('Password', pwd);
  };
  const remove = () => {
    localStorage.removeItem('checkbox');
    localStorage.removeItem('Name');
    localStorage.removeItem('Password');
  };
    return (
        <div className="App">
          <h1>Name of the user:</h1>
          <input
            type='text'
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h1>Password of the user:</h1>
          <input
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <input
            type='checkbox'
            checked={chk}
            onChange={callCheck}
            />
          <div>
            <button onClick={handle}>Done</button>
          </div>
          {localStorage.getItem('Name') && (
            <div>
              Name: <p>{localStorage.getItem('Name')}</p>
            </div>
          )}
          {localStorage.getItem('Password') && (
            <div>
              Password: <p>{localStorage.getItem('Password')}</p>
            </div>
          )}
          {localStorage.getItem('checkbox') && (
            <div>
              Checker: <p>{localStorage.getItem('checkbox')}</p>
            </div>
          )}
          <div>
            <button onClick={remove}>Remove</button>
         </div>
      </div>
   );
};